class ListNode<T> {
    next?: ListNode<T>;

    constructor(public value: T) {
    }
}

class CustomLinkedList<T> {
    private head?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;

    add(value: T) {
        const node = new ListNode<T>(value);
        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    insertAt(value: T, pos: number) {
      const current = this.getElementByPosition(pos);
      if ()
    }

    removeAt(pos: number) {

    }

    private getElementByPosition(pos: number) {
        let currentElement = this.head;
        let count = 0;

        while (currentElement) {
            if (count === pos) {
                return currentElement;
            }
            count++;
            currentElement = currentElement.next;
        }
        return -1;
    }

    getNumberOfElements() {
        return this.length;
    }

    print() {
    }

}

const numberList = new CustomLinkedList<number>();

numberList.add(10);
numberList.add(5);
numberList.add(-3);

console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

console.log('--- NOW REMOVING INDEX 1 ---');
numberList.removeAt(1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

console.log('--- NOW INSERTING AT INDEX 1 ---');
numberList.insertAt(100, 1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

const nameList = new CustomLinkedList<string>();