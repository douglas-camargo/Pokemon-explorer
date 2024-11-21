const Badge = ({css, ...props}) => {
  return (
    <div className={`${css} inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`} {...props} />
  );
}

export default Badge;
