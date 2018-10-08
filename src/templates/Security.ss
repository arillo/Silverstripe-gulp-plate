<!DOCTYPE html>
  <html lang="$ContentLocale">
  <% include Head %>

  <body class="security">
    <% include BrowserWarning %>

    <div class="security_box">
      <h1 class="u-fw-bold u-push-btm-half">
        <a href="$BaseURLForLocale">$SiteConfig.Title</a>
      </h1>

      <div class="security_content">
        <% if $Content %>
          <div class="typography u-push-btm">
            $Content
          </div>
        <% end_if %>

        <% if $Form %>
          <div class="ss-form">
            $Form
          </div>
        <% end_if %>
      </div>

      <a class="security_back" href="$BaseURLForLocale">
        &laquo; Home
      </a>

    </div>

    $SiteConfig.GoogleAnalytics
  </body>
</html>
