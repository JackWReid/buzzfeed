const components = require('../services/components');

function component(req, res, command) {
  const [task, componentName] = command;
  if (task === 'component' && !componentName) {
    res.end(
      'Please supply a component name or use `/buzzblocks components` to list all components'
    );
  }

  if (task === 'components') {
    res.json({
      text: 'In `master` buzzblocks has the following components:',
      attachments: components.getCurrentComponents().map(component => ({
        text: `<https://buzzblocks.prod.buzzfeed.io/gallery#${component.name}|${component.name}> - ${component.title}`,
        color: component.hasYml ? '#0dccb0' : '#aaaaaa'
      }))
    });
  }

  if (task === 'component') {
    const info = components.getComponent(componentName);
    const component = {
      name: info.name,
      title: info.title,
      summary: info.summary || '',
      hasYml: info.hasYml,
      api: info.api || [],
      examples: info.examples || []
    };

    res.json({
      response_type: 'in_channel',
      mrkdwn_in: ['text'],
      attachments: [
        {
          title: `${component.title} (${component.name})`,
          title_link: `https://buzzblocks.prod.buzzfeed.io/gallery#${component.name}`,
          text: component.summary,
          color: component.hasYml ? '#0dccb0' : '#aaaaaa'
        },
        {
          fields: component.api.map(prop => ({
            title: `${prop.name} (${prop.type})`,
            value: prop.description,
            short: true
          }))
        },
        ...component.examples.map((example, i) => ({
          text: `Example: <https://buzzblocks.prod.buzzfeed.io/preview/${component.name}/${i}|*${example.name}*>`
        }))
      ]
    });
  }
}

module.exports = component;
