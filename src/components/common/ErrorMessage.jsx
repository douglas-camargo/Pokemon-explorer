// Constantes de clases para estilos reutilizables
const errorContainerBase = "text-center py-8 animate-fade-in";
const errorCardBase = "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6";
const errorIconContainer = "flex items-center justify-center mb-4";
const errorIcon = "w-8 h-8 text-red-500";
const errorTitle = "text-lg font-semibold text-red-800 dark:text-red-200 mb-2";
const errorMessage = "text-red-600 dark:text-red-300 mb-4";
const retryButton = "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors";

const ErrorMessage = ({ 
  title = "Error", 
  message, 
  onRetry, 
  className = "" 
}) => {
  return (
    <div className={`${errorContainerBase} ${className}`}>
      <div className={errorCardBase}>
        <div className={errorIconContainer}>
          <svg className={errorIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className={errorTitle}>
          {title}
        </h3>
        <p className={errorMessage}>
          {message}
        </p>
        {onRetry && (
          <button 
            onClick={onRetry}
            className={retryButton}
          >
            Reintentar
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage; 