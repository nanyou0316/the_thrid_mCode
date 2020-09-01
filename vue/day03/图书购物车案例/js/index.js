var vm = new Vue({
    el: '#app',
    data: {
        bookList: [{
            "id": 1,
            "name": "《算法导论》",
            "time": "2006-9",
            "price": "￥85.00",
            "count": 1
        }, {
            "id": 2,
            "name": "《UNIX编程艺术》",
            "time": "2006-2",
            "price": "￥59.00",
            "count": 1
        }, {
            "id": 3,
            "name": "《python》",
            "time": "2008-11",
            "price": "￥78.00",
            "count": 1
        }, {
            "id": 4,
            "name": "《代码大全》",
            "time": "2005-9",
            "price": "￥42.00",
            "count": 1
        }, ],
        total: ''
    },
    methods: {
        numJia(index) {

            ++this.bookList[index].count
            // this.bookList[index].price = "￥" + (this.bookList[index].count) * (this.bookList[index].price.slice(1, -3)) + ".00"
        },
        numJian(index) {

            if (this.bookList[index].count <= 1) {
                this.bookList[index].count = 1
            } else {
                --this.bookList[index].count
            }

            // this.bookList[index].price = "￥" + (this.bookList[index].count) * (this.bookList[index].price.slice(1, -3)) + ".00"
        },
        del(index) {
            this.bookList.splice(index, 1)
        },
        
    },
    computed: {
        totalPrice() {
            let tPrice = 0
            this.bookList.forEach(item => {
                tPrice += Number(item.price.slice(1, -3)) * (item.count)
            })
            return `￥${tPrice}.00`
        }
    },
})