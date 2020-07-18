let barr = [44, 13, 19, 16, 84, 3, 14, 13, 40, 0, 59, 79,
    39, 27, 69, 88, 13, 25, 14, 88, 28, 5, 44, 24,
    11, 35, 23, 45, 9, 26, 47, 91, 74, 0, 55, 85,
    74, 23, 56, 33, 28, 77, 0, 9, 45, 7, 43, 66,
    44, 44, 45, 64, 78, 66, 50, 23, 61, 26, 31, 71,
    47, 84, 95, 75, 42, 59, 26, 25, 38, 20, 41, 6,
    21, 53, 72, 91, 15, 63, 79, 62, 24, 50, 8, 70,
    62, 35, 8, 33, 9, 6, 9, 25, 52, 62, 25, 11,
    88, 39, 82, 29,
]

function maopao(x) {
    let len = x.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (x[j] > x[j + 1]) {
                let out = x[j + 1]
                x[j + 1] = x[j]
                x[j] = out
            }
        }
    }
    return x
}
console.log(maopao(barr))


//选择排序
function xuanze(x) {
    let len = x.length
    var mi, mv
    for (let i = 0; i < len - 1; i++) {
        mi = i
        for (let j = i + 1; j < len; j++) {
            if (x[j] < x[mi]) {
                mi = j
            }
        }
        mv = x[i]
        x[i] = x[mi]
        x[mi] = mv
    }
    return x
}
console.log(xuanze(barr))
//插入排序
function charu(x) {
    let len = x.length
    for (let i = 1; i < len; i++) {
        let flag = x[i]
        let j = i - 1
        if (flag < x[j]) {
            x[j + 1] = x[j]
            j--
        }
        x[j + 1] = flag
    }
    return x
}
console.log(charu(barr))

// //希尔排序
// /function xier(x) {
//     let len = x.length
//     let flag, gap = 1
//     if (gap < len / 5) {
//         gap = gap * 5 + 1
//     }
//     for (gap; gap > 0; gap = Math.floor(gap / 5)) {
//         for (let i = gap; i < len; i++) {
//             flag = x[i]
//             for (let j = i - gap; j >= 0 && x[j] > flag; j -= gap) {
//                 x[i + gap] = x[j]
//             }
//             x[j + gap] = temp
//         }
//     }
//     return x
// }
// console.log(xier(barr))/



//归并排序
function mergeSort(x) {
    let len = x.length
    if (len < 2) {
        return x
    }
    let middle = Math.floor(len / 2)
    let left = x.slice(0, middle)
    let right = x.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {

    let arr = []
    if (left.length && right.length) {
        if (left[0] <= right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    if (left.length) {
        arr.push(left.shift())
    }
    if (right.length) {
        arr.push(right.shift())
    }

    return arr
}
console.log(mergeSort(barr))

//快排
function quick(arr, left, right) {
    if (left < right) {
        let x = arr[right],
            i = left - i,
            temp
        for (let j = left; j <= right; j++) {
            if (arr[j] <= x) {
                i++;
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }

        }
        quick(arr, left, i - 1)
        quick(arr, ri)

    }
    return arr
}
console.log(barr, 0, barr.length - 1)

//堆排序

function heap(arr) {
    let hsize = arr.length,
        temp;
    for (let i = Math.floor(hsize / 2) - 1; i >= 0; i--) {
        handle(arr, i, hsize)
        for (let j = hsize - 1; j >= 1; j--) {
            temp = arr[0]
            arr[0] = arr[j]
            arr[j] = temp
            heap(arr, 0, --hsize)
        }
    }
    return arr
}

function heap(arr, x, len) {
    var l = 2 * x + 1,
        r = 2 * x + 2,
        largest = x,
        temp;
    if (l < len && arr[l] > arr[largest]) {
        largest = l;
    }
    if (r < len && arr[r] > arr[largest]) {
        largest = r;
    }
    if (largest != x) {
        temp = arr[x];
        arr[x] = arr[largest];
        arr[largest] = temp;
        console.log(arr)
        heapify(arr, largest, len);
    }
}
console.log(heap(barr))