const PrimaryButton =  ({
    // eslint-disable-next-line react/prop-types
    text,
    // eslint-disable-next-line react/prop-types
    onClick,
    bgColor = "bg-violet-800",
    textColor = "text-orange-300",
    hoverColor = "hover:bg-gradient-to-r from-orange-300 via-orange-500 to-red-500",
    focusColor = "focus:outline-none focus:ring-2 focus:ring-orange-500",
    transitionProps = "transition-all duration-300 ease-in-out"
  }) => {
    return (
        <button
        className={`${transitionProps} mt-6 px-6 py-2 text-lg hover:text-violet-900 font-bold ${bgColor} ${textColor} rounded-lg shadow-md ${hoverColor} ${focusColor}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
};

export default PrimaryButton;