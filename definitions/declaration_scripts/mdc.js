var { _RAW_PROJECT_ID_ } = require("includes/constants");

[
  "customer_entity"
].forEach((name) =>
  declare({
    database: _RAW_PROJECT_ID_, 
    schema: "cds_mdc_2_4",
    name,
  })
);