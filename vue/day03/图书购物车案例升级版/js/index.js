var vm = new Vue({
    el: '#app',
    data: {
        bookList: [{
            "id": 1,
            "name": "《算法导论》",
            "time": "2006-9",
            "price": "85",
            "count": 1
        }, {
            "id": 2,
            "name": "《UNIX编程艺术》",
            "time": "2006-2",
            "price": "59",
            "count": 1
        }, {
            "id": 3,
            "name": "《python》",
            "time": "2008-11",
            "price": "78",
            "count": 1
        }, {
            "id": 4,
            "name": "《代码大全》",
            "time": "2005-9",
            "price": "42",
            "count": 1
        }, ],
        total: '',

    },
    methods: {
        numJia(index) {
            ++this.bookList[index].count
        },
        numJian(index) {
            --this.bookList[index].count
        },
        del(index) {
            this.bookList.splice(index, 1)
        },



    },
    //过滤器
    filters: {
        showPrice(price) {
            return "￥" + price + '.00'

        }
    },
    computed: {
        totalPrice() {
            let tPrice = 0
            this.bookList.forEach(item => {
                tPrice += Number(item.price) * (item.count)
            })
            return tPrice
        }
    },
})