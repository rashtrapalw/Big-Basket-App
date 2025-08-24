import laptopImg from "../assets/laptop.webp";
import SmartphoneImg from "../assets/smartphone.webp";
import HeadphoneImg from "../assets/headphone.webp";
import KeyboardImg from "../assets/keyboard.webp";
import MouseImg from "../assets/mouse.webp";
import ChairImg from "../assets/chair.webp";
import TableImg from "../assets/table.jpg";
import MonitorImg from "../assets/monitor.webp";
import PrinterImg from "../assets/printer.webp";    
import BagpackImg from "../assets/bagpack.webp";
const products = [
  { id: 1, name: 'Laptop', price: 60000, stock: true, category: 'Electronics', description: 'High-performance laptop', image: laptopImg },
  { id: 2, name: 'Smartphone', price: 20000, stock: true, category: 'Electronics', description: 'Latest smartphone model', image: SmartphoneImg },
  { id: 3, name: 'Headphones', price: 2000, stock: false, category: 'Accessories', description: 'Noise-cancelling headphones', image: HeadphoneImg },
  { id: 4, name: 'Keyboard', price: 1500, stock: true, category: 'Accessories', description: 'Mechanical keyboard', image: KeyboardImg },
  { id: 5, name: 'Mouse', price: 800, stock: true, category: 'Accessories', description: 'Wireless mouse', image: MouseImg },
  { id: 6, name: 'Chair', price: 4500, stock: true, category: 'Furniture', description: 'Ergonomic office chair', image: ChairImg },
  { id: 7, name: 'Table', price: 7000, stock: true, category: 'Furniture', description: 'Study table with drawer', image: TableImg },
  { id: 8, name: 'Monitor', price: 12000, stock: false, category: 'Electronics', description: 'Full HD monitor', image: MonitorImg },
  { id: 9, name: 'Printer', price: 8000, stock: true, category: 'Electronics', description: 'All-in-one printer', image: PrinterImg },
  { id: 10, name: 'BackPack', price: 1200, stock: true, category: 'Accessories', description: 'Durable backpack', image: BagpackImg }
];
export default products;
