import { useState, useRef } from "react";

const Reviews_Modals = ({ setOpenPopup }) => {
  const [images, setImages] = useState([]);
  const [review, setReview] = useState("");
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const remainingSlots = 3 - images.length;
    const filesToAdd = files.slice(0, remainingSlots);

    const newImages = filesToAdd.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages([...images, ...newImages]);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleSubmit = () => {
    console.log("Review:", review);
    console.log("Images:", images);
    setOpenPopup(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl bg-white shadow-2xl rounded-2xl p-6 overflow-y-auto max-h-[90vh] md:max-h-[96vh]">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={() => setOpenPopup(false)}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Write a Review
        </h2>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Upload Product Images (Max 3)
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img.preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 cursor-pointer text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            ))}

            {images.length < 3 && (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-black hover:bg-black/10 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-gray-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="text-sm text-gray-500">Add Image</span>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Review Text Area */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Your Review
          </label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share your experience with this product..."
            className="w-full h-32 md:h-40 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={() => setOpenPopup(false)}
            className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 font-medium"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews_Modals;
