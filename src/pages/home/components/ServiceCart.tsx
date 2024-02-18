import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";

const products = [
  {
    id: 1,
    name: "Free Shipping",
    iconComponent: DeliveryDiningOutlinedIcon,
    imageAlt: "Free Shipping.",
    text: "Free on order over $300",
  },
  {
    id: 2,
    name: "Security Payment",
    iconComponent: SecurityOutlinedIcon,
    imageAlt: "Security.",
    text: "Free on order over $300",
  },
  {
    id: 3,
    name: "30 Day Return",
    iconComponent: PublishedWithChangesOutlinedIcon,
    imageAlt: "30 day money guarantee",
    text: "30 day money guarantee",
  },
  {
    id: 4,
    name: "24/7 Support",
    iconComponent: PhoneInTalkOutlinedIcon,
    imageAlt: "Support every time fast.",
    text: "Support every time fast",
  },
];

export default function ServiceCart() {
  return (
    <div className="lg:py-24 py-15 lg:mb-24 flex justify-center">
      <div className="max-w-7xl px-4 mt-12 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative w-full max-w-2xl rounded-lg  bg-gray-200 lg:p-8 p-5 flex flex-col items-center justify-center"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <div className="bg-secondary w-20 h-20 lg:w-32 lg:h-32 rounded-full flex justify-center items-center">
                    <product.iconComponent
                      style={{ fontSize: "4rem", color: "white" }} // Adjust font size for responsiveness
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2 flex flex-col items-center justify-center">
                <h3 className="text-lg text-gray-900 text-center">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 text-center">
                  {product.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
