// <script>
fetch("https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf")
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "file.pdf");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  });
// </script>
