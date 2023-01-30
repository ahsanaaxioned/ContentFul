const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = async () => {
  return client.getEntries({ content_type: 'giffleball',order: 'sys.createdAt'  })
    .then(response => {
      const page = response.items
        .map(page => {
          page.fields.date = new Date(page.sys.updatedAt);
          return page.fields;
        });
      return page;
    })
    .catch(console.error);
};