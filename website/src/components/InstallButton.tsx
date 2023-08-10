const iconChrome = (
  <svg
    className="mr-1 w-5 opacity-100 transition-all md:w-6 md:group-hover:mr-0 md:group-hover:w-0 md:group-hover:opacity-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="21.17" x2="12" y1="8" y2="8"></line>
    <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
    <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
  </svg>
)

export function InstallButton() {
  return (
    <a
      className="gap-x group flex cursor-pointer gap-y-3 overflow-hidden rounded-[8px] border-2 border-solid border-current px-4 py-2 text-sm font-semibold text-current shadow-[0_5px_0_-2px_var(--v2p-color-main-300)] md:px-8 md:py-3 md:text-base md:font-bold"
      href="https://chrome.google.com/webstore/detail/v2ex-polish/onnepejgdiojhiflfoemillegpgpabdm?hl=zh-CN&authuser=0"
      rel="noreferrer"
      target="_blank"
    >
      {iconChrome}
      安装至 Chrome
      <svg
        className="ml-0 w-0 rotate-[-0.25turn] opacity-0 transition-all md:group-hover:ml-1 md:group-hover:w-6 md:group-hover:opacity-100"
        viewBox="0 0 24 24"
      >
        <path
          d="M6.293 8.793a1 1 0 0 1 1.32-.083l.094.083L12 13.085l4.293-4.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-5 5a1 1 0 0 1-1.32.083l-.094-.083-5-5a1 1 0 0 1 0-1.414z"
          fill="#1D354F"
        ></path>
      </svg>
    </a>
  )
}