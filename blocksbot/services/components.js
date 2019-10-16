const yaml = require('yamljs');
const atob = require('atob');
const { github } = require('../api');

const parseComponentYml = obj => {
  const fileRaw = atob(obj.data.content);
  return yaml.parse(fileRaw);
};

const dropNonComponents = component => {
  if (component.name.startsWith('_')) {
    return false;
  }

  if (component.name === 'svg') {
    return false;
  }

  return true;
};

const components = {
  state: {
    currentComponents: []
  },

  async updateCurrentComponents() {
    github
      .getMonoContent('/packages/frontend/buzzblocks/components')
      .then(json => {
        const componentNames = json.data.map(file => file.name);
        return Promise.all(
          componentNames.map(name =>
            github
              .getMonoContent(`/packages/frontend/buzzblocks/components/${name}`)
              .then(json => ({
                name,
                hasYml: !!json.data.find(file => file.name === 'component.yml')
              }))
          )
        )
          .then(components => components.filter(dropNonComponents))
          .then(thinComponents =>
            Promise.all(
              thinComponents.map(component => {
                if (!component.hasYml) {
                  return component;
                }

                return github
                  .getMonoContent(
                    `/packages/frontend/buzzblocks/components/${component.name}/component.yml`
                  )
                  .then(data => {
                    const ymlData = parseComponentYml(data);
                    return {
                      name: component.name,
                      title: ymlData.title,
                      summary: ymlData.summary,
                      api: ymlData.usage.api,
                      examples: ymlData.examples,
                      hasYml: true
                    };
                  });
              })
            )
          );
      })
      .then(components => {
        this.state.currentComponents = components;
      });
  },

  getCurrentComponents() {
    return this.state.currentComponents;
  },

  getComponent(name) {
    return this.state.currentComponents.find(
      component => component.name === name
    );
  }
};

module.exports = components;
