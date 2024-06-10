export default function handler(request, response) {
  response.setHeader("Content-Type", "image/svg+xml");

  const svgString = `
  <svg
  width="450"
  height="250"
  viewBox="0 0 450 250"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="450" height="250" fill="white" />
  <path
    d="M264 69.1317C260.168 65.701 255.981 62.6603 251.5 60.0681V91.9275C242.338 81.5477 228.934 74.9998 214 74.9998C200.013 74.9998 187.365 80.7438 178.291 90.0025C180.776 93.6702 182.879 97.6169 184.547 101.786C191.414 93.0851 202.055 87.4996 214 87.4996C234.711 87.4996 251.5 104.289 251.5 124.999C251.5 139.832 242.888 152.653 230.392 158.736C226.531 160.616 222.298 161.852 217.834 162.305C216.574 162.433 215.295 162.499 214 162.499C209.521 162.499 205.225 161.713 201.243 160.273C186.813 155.052 176.501 141.231 176.501 124.999C176.501 97.3854 154.115 74.9998 126.501 74.9998C98.8876 74.9998 76.502 97.3854 76.502 124.999C76.502 152.613 98.8876 174.999 126.501 174.999C140.489 174.999 153.136 169.254 162.211 159.996C159.726 156.328 157.622 152.381 155.954 148.212C149.087 156.913 138.447 162.499 126.501 162.499C105.791 162.499 89.0018 145.709 89.0018 124.999C89.0018 104.289 105.791 87.4996 126.501 87.4996C147.212 87.4996 164.001 104.289 164.001 124.999C164.001 130.218 164.801 135.249 166.283 139.978C168.673 147.598 172.837 154.432 178.291 159.996C182.303 164.09 187.015 167.497 192.233 170.024C198.813 173.212 206.198 174.999 214 174.999C221.802 174.999 228.711 173.325 235.13 170.328C235.312 170.243 235.496 170.155 235.679 170.068C236.043 169.893 236.404 169.712 236.765 169.528C252.934 161.246 264.001 144.415 264.001 124.999V69.1317H264Z"
    fill="#0056A9"
  />
  <path
    d="M382.248 74.9998H285.814C288.563 78.9409 290.997 83.1209 293.077 87.4996H313.997V173.67C318.432 172.528 322.629 170.793 326.497 168.556V87.4996H398.247C393.4 82.7582 388.09 78.5198 382.248 74.9998Z"
    fill="#0056A9"
  />
  <path
    d="M126.501 200C147.485 200 166.455 191.383 180.066 177.494C176.532 175.204 173.245 172.569 170.25 169.634C158.977 180.686 143.535 187.5 126.5 187.5C91.9823 187.5 64.0003 159.518 64.0003 125.001C64.0003 90.4837 91.9823 62.4998 126.501 62.4998C134.369 62.4998 141.898 63.9545 148.834 66.6087C151.86 63.2345 155.145 60.0954 158.656 57.2243C148.911 52.5922 138.008 50 126.501 50C85.0789 50 51.5005 83.5784 51.5005 124.999C51.5005 166.42 85.0789 199.998 126.5 199.998L126.501 200Z"
    fill="#343435"
  />
  <path
    d="M276.499 124.999C276.499 159.516 248.517 187.498 214 187.498C206.132 187.498 198.603 186.044 191.667 183.391C188.641 186.765 185.356 189.905 181.845 192.776C191.591 197.408 202.494 199.998 214 199.998C255.421 199.998 288.999 166.42 288.999 124.999C288.999 109.665 284.398 95.4056 276.499 83.5273V124.999Z"
    fill="#343435"
  />
  <path
    d="M214 50C222.766 50 231.181 51.5039 239 54.2675V67.7007C231.343 64.3556 222.889 62.4998 214 62.4998C196.965 62.4998 181.524 69.314 170.25 80.3664C167.255 77.4315 163.968 74.7955 160.433 72.5059C174.045 58.617 193.016 50 214 50Z"
    fill="#343435"
  />
  <path
    d="M259.094 50C264.958 53.5328 270.374 57.7347 275.236 62.4998H376.498C371.636 57.7347 366.22 53.5328 360.356 50H259.094Z"
    fill="#343435"
  />
  <path
    d="M358.797 99.9994H372.231C374.996 107.82 376.498 116.233 376.498 124.999C376.498 166.42 342.921 199.998 301.499 199.998C289.993 199.998 279.09 197.406 269.344 192.776C272.857 189.905 276.14 186.766 279.166 183.391C286.101 186.045 293.631 187.498 301.499 187.498C336.016 187.498 363.998 159.516 363.998 124.999C363.998 116.11 362.142 107.656 358.797 99.9994Z"
    fill="#343435"
  />
</svg>
  `;

  return response.send(svgString);
}
