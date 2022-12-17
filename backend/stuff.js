// Query API Example

const dotenv = require('dotenv');
dotenv.config();

const { queryApi } = require("sec-api");

queryApi.setApiKey(process.env.API_KEY);

const query = {
  query: {
    query_string: {
      query: 'cik:320193 AND formType:"10-Q"',
    },
  },
  from: "0",
  size: "20",
  sort: [{ filedAt: { order: "desc" } }],
};

queryApi.getFilings(query).then((response) => {
  console.log(response);
});

// const filings = await queryApi.getFilings(query)
