import PropTypes from "prop-types";

const ShimmerLoading = ({
  className,
  itemClassName,
  style,
  itemStyle,
  width,
  height,
  count,
  lines,
}) => {
  return (
    <>
      {Array.from({ length: lines || 1 }, (_, i) => (
        <div key={i} className={className} style={style}>
          {Array.from({ length: count || 1 }, (_, i) => (
            <div
              key={i}
              className={"loading " + itemClassName}
              width={width}
              height={height}
              style={itemStyle}
            />
          ))}
        </div>
      ))}
    </>
  );
};

ShimmerLoading.propTypes = {
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  style: PropTypes.object,
  itemStyle: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  count: PropTypes.number,
  lines: PropTypes.number,
  customElement: PropTypes.element,
};

export default ShimmerLoading;
