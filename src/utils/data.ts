const formattedDate = new Intl.DateTimeFormat("en", {
  weekday: "short",
  day: "numeric",
  month: "short",
}).format(new Date());

export { formattedDate };
