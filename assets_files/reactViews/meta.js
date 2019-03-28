const React = require('react');

const Meta = ({ title, description, image }) => {
  return (
    <React.Fragment>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="fb:app_id" content="470272653097747" />
      <meta property="og:site_name" content="Vicente Rodríguez blog" />
      <meta property="og:type" content="website" />


      <meta property="og:title" content={title || 'Vicente Rodríguez Blog: Tutoriales de programación y más.'} />
      <meta property="og:description" content={description || 'Tutoriales, trucos y más sobre programación en español'} />
      <meta property="og:image" content={image || 'https://res.cloudinary.com/vincent1bt/image/upload/v1452704935/mac_lsiaue.jpg'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vincent1bt" />

      <meta name="twitter:title" content={title || 'Vicente Rodríguez Blog: Tutoriales de programación y más.'} />
      <meta name="twitter:description" content={title || 'Tutoriales, trucos y más sobre programación en español'} />
      <meta name="twitter:image" content={image || 'https://res.cloudinary.com/vincent1bt/image/upload/v1452704935/mac_lsiaue.jpg'} />
      <meta name="description" content={description || 'Tutoriales, trucos y más sobre programación en español'} />

      <link rel="icon" href="https://res.cloudinary.com/vincent1bt/image/upload/v1452713905/favicon128_pmh8op.png" />
      <title>{title || 'Vicente Rodríguez Blog: Tutoriales de programación y más.'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" href="/public/blog/styles/style.css" />
    </React.Fragment>
  );
}

module.exports = Meta;
