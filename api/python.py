from PIL import Image, ImageEnhance, ImageFilter
import pytesseract

# def preprocess_image(image_path):
#     with Image.open(image_path) as img:
#         # Convert image to grayscale``
#         img = img.convert('L')
#         # Enhance the image contrast
#         enhancer = ImageEnhance.Contrast(img)
#         img = enhancer.enhance(2)
#         # Apply a sharpening filter
#         img = img.filter(ImageFilter.SHARPEN)
#         return img

def ocr_from_image(image_path):
    img = image_path
    text = pytesseract.image_to_string(img)
    return text

if __name__ == "__main__":
    image_path = '/home/dino/Music/Jp/Integrations/Blog_Paytm_How-To-Get-Duplicate-Aadhar-Card.jpg'
    text = ocr_from_image(image_path)
    print("Extracted Text:", text)