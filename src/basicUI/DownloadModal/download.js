function download (url, fileName) {
  const x = new XMLHttpRequest()
  x.responseType = 'blob'
  x.open('GET', url, true)
  x.send()
  x.onload = () => {
    const downloadElement = document.createElement('a')
    const href = window.URL.createObjectURL(x.response) // create download url
    downloadElement.href = href
    downloadElement.download = fileName // set filename (include suffix)
    document.body.appendChild(downloadElement) // append <a>
    downloadElement.click() // click download
    document.body.removeChild(downloadElement) // remove <a>
    window.URL.revokeObjectURL(href) // revoke blob
  }
}

export { download }