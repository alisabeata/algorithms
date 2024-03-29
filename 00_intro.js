// данные

// • Arrays/массивы

// -- чтение (занимает один шаг)
// -- поиск (перебором, Linear search/Линейный поиск) (занимает n-шагов, n кол-во элементов)
// -- добавление (занимает n+1 шагов)
// -- удаление (занимает n+1 шагов)


// - Set/список уникальных значений

// -- чтение (занимает один шаг)
// -- поиск (занимает n-шагов)
// -- добавление (сначала выполняет проверку на уникальность, затем добавляет значение, 2n+1)


// - отсортированный массив

// -- поиск (быстрее чем в обычн массиве, тк сверяется с соотв значением, не нужно проходить весь массив)
// -- добавление (сначала выполняется операция поиска, затем добавляет значение, зтем сдвигает 3n+1)


// (!) анализ кол-ва шагов явл ключевым параметром в оценке эффективности алгоритма

// (!) в отсортированном массиве быстрый поиск, но медленное добавление


// алгоритмы
// https://www.youtube.com/watch?v=oVK4L26SkpM

// • поиск

// --- перебором (Linear search/Линейный поиск)
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    let item = array[i];
    
    if (item === val) return i;
  }
  return -1;
}

// --- бинарный поиск (разделение массива на две части, переход к поиску в соотв половине)
function binarySearch(arr, val) {
  let startInd = 0;
  let endInd = arr.length - 1;
  
  while (startInd <= endInd) {
    let middleInd = Math.round((startInd + endInd) / 2);
    let middleVal = arr[middleInd];
    
    if (val < middleVal) {
      endInd = middleInd - 1;
    } else if (val > middleVal) {
      endInd = middleInd + 1;
    } else {
      return middleInd;
    }
  }
  
  return -1;
}

// (!) существенная разница в эффективности бинарного видна в отсортированных массивах



// --------------------------------------------------

// O(n) - линейный
for (let i = 0; i < arr.length; i++) {
}

// O(n^2) - n в квардате; подразумевается массив в массиве (! неоптимально)
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr.length; j++) {...}
}

// (!) самые неоптимальные O(n!) / O(2^n) / O(n^2)
// (!) наиболее оптимальные (по уменьшению) O(1) / O(log n) / O(n) / O(log n)
	
