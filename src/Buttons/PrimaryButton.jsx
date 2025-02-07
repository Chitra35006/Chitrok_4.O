const PrimaryButton = ({
  text,
  onClick,
  link,
  bgColor = "bg-violet-800",
  textColor = "text-orange-300",
  hoverColor = "hover:bg-gradient-to-r from-orange-300 via-orange-500 to-red-500",
  focusColor = "focus:outline-none focus:ring-2 focus:ring-orange-500",
  transitionProps = "transition-all duration-300 ease-in-out"
}) => {
  // If onClick is provided, handle it along with the download logic
  const handleClick = () => {
    if (onClick) {
      onClick(); // Execute custom onClick logic
    }
    if (link) {
      // Programmatically trigger download if the link is provided
      const linkElement = document.createElement("a");
      linkElement.href = link;
      linkElement.download = link.split("/").pop(); // This will set the download filename based on the link
      linkElement.click();
    }
  };

  return (
    <button
      className={`${transitionProps} mt-6 px-6 py-2 text-lg hover:text-violet-900 font-bold ${bgColor} ${textColor} rounded-lg shadow-md ${hoverColor} ${focusColor}`}
      onClick={handleClick} // Use handleClick to trigger download and onClick
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
