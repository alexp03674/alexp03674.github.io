<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html"/>  
  <xsl:template match="/">
    <html>
      <head>
        <style>
          body {
            background-color: #f2f2f2;
          }

          .container {
            width: 700px;
            margin: 50px auto;
            font-family: "Helvetica Neue", "Arial", sans-serif;
            font-size: 18px;
          }

          table {
            width: 100%;
            table-layout: auto;
            border-collapse: collapse;
            text-align: left;
          }

          tr {
            background-color: #fff;
            border-bottom: 1px solid #dededf;
          }

          tr:first-child {
            background-color: #861F41;
            color: #fff;
          }

          th, td {
            padding: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>My Playlist</h1>
          <table border="0">
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Link</th>
            </tr>
            <xsl:for-each select="playlist/track">
              <tr>
                <td>
                  <xsl:value-of select="title" />
                </td>
                <td>
                  <xsl:value-of select="artist" />
                </td>
                <td>
                  <xsl:value-of select="album" />
                </td>
                <td>
                  <xsl:element name="a">
                    <xsl:attribute name="href">
                      <xsl:value-of select="link" />
                    </xsl:attribute>
                    Play on YouTube </xsl:element>
                </td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>