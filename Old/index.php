<!--<form action="results.php" method="post">
 <p>Search Term: <input type="text" name="search_term" /></p>
 <p><input type="submit" /></p>
</form>-->

<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

  <!-- Primary Meta Tags -->
  <title>New York Times | Article Search</title>
  <meta name="title" content="New York Times | Article Search">
  <meta name="description"
    content="A New York Times article search engine, that integrates the NY times article search a API.">
  <meta name="author" content="Jesus Hilario H.">


  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="fb:admins" content="61598764581">
  <meta property="og:site_name" content="New York Times | Article Search">
  <meta property="og:url" content="https://jesushilarioh.com/ny-times-api-v2/">
  <meta property="og:title" content="New York Times | Article Search">
  <meta property="og:description"
    content="A New York Times article search engine, that integrates the NY times article search a API.">
  <meta property="og:image"
    content="https://jesushilarioh.com/ny-times-api-v2/images/new-york-times-article-search-api.png">

  <!-- Twitter -->
  <meta property="twitter:creator" content="@jesushilarioh">
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://jesushilarioh.com/ny-times-api-v2/">
  <meta property="twitter:title" content="New York Times | Article Search">
  <meta property="twitter:description"
    content="A New York Times article search engine, that integrates the NY times article search a API.">
  <meta property="twitter:image"
    content="https://jesushilarioh.com/ny-times-api-v2/images/new-york-times-article-search-api.png">

  <link href="main.css" rel="stylesheet">
</head>

<body>

  <div class="container">
    <h1 class="main-title"><a href="./index.php">New York Times | Article Search</a></h1>
    <form action="results.php" method="post">

      <div class="input-group input-group-lg mb-3">
        <input type="text" id="search_term" class="form-control" placeholder="Search..." name="search_term"
          aria-label="search_term" aria-describedby="search_term">
        <div class="input-group-append">
          <button class="input-group-text" id="search_term" type="submit">Search</button>
        </div>
      </div>

    </form>

    <div class="footer">
      <div class="footer-box-1">
        <a href="http://developer.nytimes.com" target="_blank" class="powered-by-img">
          <img src="./images/attributionImg.png" alt="Powered By The New York Times">
        </a>
      </div>
      <div class="footer-box-2">
        <p class="footer-para-1">Produced by
          <a class="jesushilarioh" href="https://twitter.com/jesushilarioh" target="_blank">Jesús Hilario H</a>.
        </p>
      </div>
    </div>


  </div>




  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
  </script>
</body>

</html>