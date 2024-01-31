class book{
    #isbn;
    #title;
    #price;
    constructor(isbn,title,price){
        this.#isbn=isbn
        this.#title=title
        this.#price=price
    }

    get isbn(){
        return this.#isbn
    }
    get title(){
        return this.#title
    }
    get price(){
        return this.#price
    }
    set isbn(isbn){
        this.#isbn=isbn;
    }
    set title(title){
        this.#title=title
    }
    set price(price){
        this.#price=price
    }
    display(){
        return`${this.#isbn} ${this.#title} ${this.#price}`
    }
}
let book1=new book("787","harry potter",540)
console.log(book1.display())