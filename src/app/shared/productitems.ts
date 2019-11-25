import { ProductModel } from './product-model';

export const ProductItems: ProductModel[] = [
  {
    id: '1',
    // tslint:disable-next-line: max-line-length
    imgSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTo3F7S8s1sBs5kT7HNKXlJm2Alo-Mt6TQ7uiwtYM7aiwcq7vBJl7abg8cEJZ64XsgBV8UogNqAYA&usqp=CAc',
    Name: 'MacBook Pro',
    Price: '$1,299.99',
    Quantity: '1',
    Rating: '4.7/5'
  },
  {
    id: '2',
    // tslint:disable-next-line: max-line-length
    imgSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQx2fOCr3Sx_XMuqQtJ-0lF32mhT5K-zq-M6q2N7t9Z7CvKAH7JiWVQVtqf8wrDt6zkFb7QtxMcQ&usqp=CAc',
    Name: 'Swiffer Wetjet',
    Price: '$24.99',
    Quantity: '1',
    Rating: '4.0/5'
  },
  {
    id: '3',
    // tslint:disable-next-line: max-line-length
    imgSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1Dsw_X6Eu-HawngCzUeAsd3dugIR3xstCH1m11BuvGUDbQreZkKd23CcpRhH-ubOBmQ8IczsP0GY&usqp=CAc',
    Name: 'Ray-Ban Sunglasses',
    Price: '$150.00',
    Quantity: '1',
    Rating: '3.9/5'
  },
  {
    id: '4',
    // tslint:disable-next-line: max-line-length
    imgSrc: 'https://static.meijer.com/Media/000/28400/0002840042054_0600.png',
    Name: 'Lays Potato Chips',
    Price: '$9.99',
    Quantity: '1',
    Rating: '3.5/5'
  },
  {
    id: '5',
    // tslint:disable-next-line: max-line-length
    imgSrc: 'data:image/png;base64,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',
    Name: 'Beats Headphones',
    Price: '$99.99',
    Quantity: '1',
    Rating: '4.5/5'
  }
];
