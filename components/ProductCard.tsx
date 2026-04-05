import Link from 'next/link';

export default function ProductCard({ id, name, price, image }: any) {
  return (
    <Link href={`/products/${id}`} className="group block">
      <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden mb-4 relative shadow-sm">
        {/* That sun-drenched shadow effect we discussed */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')] mix-blend-multiply"></div>
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-[#8b5e3c] font-medium">{price} AED</p>
    </Link>
  );
}
