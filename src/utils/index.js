import { scaleLinear } from "@vx/scale"
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export const colorRange = (a, b, amount) => {
  const colors = []
  const scale = scaleLinear({
    range: [a, b],
    domain: [1, amount],
  })

  for (let i = 0; i < amount; i++) {
    colors.push(scale(i))
  }

  return colors
}

export const formatDate = srcDate => {
  if (srcDate) {
    const dateStr = new Date(srcDate)

    return `${dateStr.getDate()}-${
      monthNames[dateStr.getMonth()]
    }-${dateStr.getFullYear()}`
  }
  return "nn/sss/nnnn"
}
