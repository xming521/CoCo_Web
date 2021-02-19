export function notice(that, title, message, type = 'info', duration = 2000) {
  const h = that.$createElement
  that.$notify({
    title: title,
    message: message,
    type: type,
    duration: duration
  })
}

