// Constantes de clases para estilos reutilizables
const skeletonCardBase = "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm";
const skeletonHeader = "relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-shimmer";
const skeletonImage = "w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded-full mx-auto mt-8 animate-shimmer";
const skeletonId = "absolute top-2 right-2 w-12 h-4 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded animate-shimmer";
const skeletonContent = "p-6";
const skeletonTitle = "w-24 h-6 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded mb-3 animate-shimmer";
const skeletonBadges = "flex gap-2 mb-4";
const skeletonBadge = "w-16 h-6 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded-full animate-shimmer";
const skeletonStats = "space-y-2";
const skeletonStat = "flex justify-between";
const skeletonStatLabel = "w-16 h-4 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded animate-shimmer";
const skeletonStatValue = "w-8 h-4 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded animate-shimmer";

const SkeletonCard = () => {
  return (
    <div className={skeletonCardBase}>
      <div className={skeletonHeader}>
        <div className={skeletonImage} />
        <div className={skeletonId} />
      </div>
      <div className={skeletonContent}>
        <div className={skeletonTitle} />
        <div className={skeletonBadges}>
          <div className={skeletonBadge} />
          <div className={skeletonBadge} />
        </div>
        <div className={skeletonStats}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={skeletonStat}>
              <div className={skeletonStatLabel} />
              <div className={skeletonStatValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
