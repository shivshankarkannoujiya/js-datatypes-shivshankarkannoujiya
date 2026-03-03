/**
 * 🪪 Aadhaar Number Masker
 *
 * Sharma uncle ka beta naya app bana raha hai jisme Aadhaar number dikhana hai,
 * lekin privacy maintain karni hai. Toh last 4 digits dikhao, baaki sab mask
 * karo "X" se. Format mein dashes bhi hone chahiye: XXXX-XXXX-1234
 *
 * Rules:
 *   - Input ek string honi chahiye exactly 12 digits ki (no spaces, no dashes)
 *   - Pehle 8 digits ko "X" se replace karo
 *   - Last 4 digits as-is rakho
 *   - Output format: "XXXX-XXXX-1234" (dashes after every 4 characters)
 *   - Hint: Use string methods like slice(), repeat(), and length
 *
 * Validation:
 *   - Agar input string nahi hai, return "INVALID"
 *   - Agar string ki length exactly 12 nahi hai, return "INVALID"
 *   - Agar string mein koi non-digit character hai, return "INVALID"
 *
 * @param {string} aadhaarNumber - 12-digit Aadhaar number as string
 * @returns {string} Masked Aadhaar in format "XXXX-XXXX-1234" or "INVALID"
 *
 * @example
 *   maskAadhaar("123456781234")
 *   // => "XXXX-XXXX-1234"
 *
 *   maskAadhaar("9876")
 *   // => "INVALID"
 */

const isAllDigits = (str) => {
  return [...str].every(ch => ch >= "0" && ch <= "9")
}

export function maskAadhaar(aadhaarNumber) {

  if (typeof (aadhaarNumber) !== "string") return "INVALID";
  if (aadhaarNumber.length !== 12) return "INVALID";
  if (!isAllDigits(aadhaarNumber)) return "INVALID";
  
  const lastFourdigits = aadhaarNumber.slice(-4);
  const maked = "X".repeat(8);

  return `${maked.slice(0,4)}-${maked.slice(4)}-${lastFourdigits}`
}
