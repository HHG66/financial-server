const SvgIcon = ({ iconClass, className, style }) => {
  const svgClass = className ? 'svg-icon ' + className : 'svg-icon';
  const iconName = `#${iconClass}`;
  return (
    <>
      <svg className={svgClass} aria-hidden="true" style={style} width="100" height="100">
        <use xlinkHref={iconName} fill={style.color||"white"}  />
      </svg>
    </>
  );
};


export default SvgIcon
