// Constantes de clases para estilos reutilizables
const spinnerContainer = "flex justify-center items-center";
const spinnerBase = "animate-spin rounded-full border-4 border-gray-200 border-t-blue-500";

const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={`${spinnerContainer} ${className}`}>
      <div className={`${sizeClasses[size]} ${spinnerBase}`}></div>
    </div>
  );
};

export default LoadingSpinner; 