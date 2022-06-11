// https://cpanel.epizy.com/panel/indexpl.php?option=mysql&ttt=776627963145224192
let config = {
  // database credentials
  dbName: "epiz_31894316_study_cloud_db",
  userName: "epiz_31894316",
  password: "$hadowRanger7",
  host: "sql213.epizy.com",

  // server endpoint
  serverEndpoint: "https://study-cloud-server.herokuapp.com/",

  // google sign-in
  google_signin3: {
    client_id:
      "558873708274-so678nu3bml1gcuoopmd6q48pfvtm692.apps.googleusercontent.com",
    project_id: "study-cloud-352912",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "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",
    redirect_uris: ["http://localhost:3000"],
    javascript_origins: ["http://localhost:3000"],
  },
};

export default config;
