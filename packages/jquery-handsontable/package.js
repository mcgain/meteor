Package.describe({
  summary: "handsontable - jQuery table plugin"
});

Package.on_use(function (api) {
  api.use('jquery');
  api.add_files('jquery.handsontable.js', 'client');
  api.add_files('jquery.handsontable.css', 'client');
});
