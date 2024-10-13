export const Footer = () => {
  return (
    <footer className="bg-customftrgrn text-white">
      <div className="container mx-auto px-8 py-10">
        <div className="flex justify-start mb-10">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 275 65"
              stroke="currentColor"
              style={{ color: 'rgba(19, 74, 33, 1)' }}
              className="[&>g:first-child]:fill-[#666666] [&>g:last-child]:fill-[#1b1b1b] h-7 md:h-10 [&_g]:!fill-background"
            >
              <g className="fill-customGreen">
                <path d="M272.343 58.932a2.564 2.564 0 1 0 1.764.749 2.427 2.427 0 0 0-1.764-.749zM272.597 44.322a4.216 4.216 0 0 0-2.363-.74h-.406v1.509h.406a2.814 2.814 0 0 1 1.54.482 3.672 3.672 0 0 1 1.242 1.34 3.736 3.736 0 0 1 .47 1.835 2.346 2.346 0 0 1-1.306 2.135 10.862 10.862 0 0 1-5.04.826c-2.485 0-4.223-.278-5.168-.827a2.343 2.343 0 0 1-1.318-2.13 2.831 2.831 0 0 1 .117-.872l.045-.124h4.25l.169-.682a5.934 5.934 0 0 0 .06-.842 2.382 2.382 0 0 0-2.516-2.5 3.015 3.015 0 0 0-2.528 1.477 7.256 7.256 0 0 0-.971 4.109 7.967 7.967 0 0 0 2.1 5.859 8.92 8.92 0 0 0 11.518 0 7.968 7.968 0 0 0 2.1-5.859 6.539 6.539 0 0 0-.648-2.954 5.179 5.179 0 0 0-1.753-2.042zM267.14 42.347a7.252 7.252 0 1 0-5.758-2.093 7.835 7.835 0 0 0 5.758 2.093zm-5.138-9.355a18.475 18.475 0 0 1 10.275 0c.907.444 1.349.944 1.349 1.528s-.441 1.085-1.349 1.528a18.464 18.464 0 0 1-10.275 0c-.907-.444-1.348-.944-1.348-1.528s.441-1.084 1.348-1.528zM260.052 12.749a6 6 0 0 0-.772 3.06 4.369 4.369 0 0 0 1.385 3.171 4.924 4.924 0 0 0 .716.58 3.63 3.63 0 0 0-.474.345 3.712 3.712 0 0 0-1.2 2.906v2.925h1.144l.422-1.681h11.743l.422 1.681h1.144V8.543h-1.144l-.422 1.68h-10.011a7.685 7.685 0 0 1-.966-.507c-.639-.478-.963-.925-.963-1.329 0-.314.242-.623.72-.917a5.008 5.008 0 0 1 2.531-.5h7.313a2.621 2.621 0 0 0 2.938-2.925V0h-1.144l-.422 1.68h-8.684a4.791 4.791 0 0 0-2.548.719 5.035 5.035 0 0 0-1.835 2.006 6.144 6.144 0 0 0-.664 2.861 4.315 4.315 0 0 0 1.477 3.179 5.337 5.337 0 0 0 .814.62 5.407 5.407 0 0 0-1.52 1.684zm12.959 6.017h-10.006a7.692 7.692 0 0 1-.966-.507c-.639-.478-.963-.925-.963-1.33 0-.314.242-.623.72-.917a5.009 5.009 0 0 1 2.531-.5h8.684l.408 1.627z"></path>
              </g>
              <g className="fill-customGreen">
                <path d="M45.875 6.479q-6.421-4.833-21.221-4.833H.718v2.17H.73a18.61 18.61 0 0 1 4.309.5 25.483 25.483 0 0 1 6.043 1.944 20.924 20.924 0 0 1 1.977 1.048 3.019 3.019 0 0 1 .318.205l.074.041.045.033a16.052 16.052 0 0 1 6.118 6.58 1.342 1.342 0 0 1 .136.292c0 .008 0 .012.008.02V3.865h4.9a11.005 11.005 0 0 1 9.048 4.3q3.436 4.3 3.434 12.565s-.085 15.654-13.711 15.654c-6.968 0-10.873-3-12.576-4.782l-.021-.024c-.079-.091-.153-.184-.227-.276-.112-.14-.223-.281-.331-.424-.151-.2-.3-.4-.438-.611-.045-.066-.093-.13-.137-.2a15.423 15.423 0 0 1-.517-.827c-.022-.035-.041-.072-.062-.107a17.23 17.23 0 0 1-.374-.68c.006.014.015.027.021.04l-.023-.042c-.029-.058-.058-.115-.087-.177a15.885 15.885 0 0 1-.834-2.224 15.483 15.483 0 0 1-.611-4.653 16.615 16.615 0 0 1 .219-2.322.151.151 0 0 1 .165.139c.009.049.017.119.021.181a23.334 23.334 0 0 0 3.244 8.652c.265.415.553.835.867 1.241.062-.041.12-.078.178-.119a11.894 11.894 0 0 0 1.857-1.533 11.512 11.512 0 0 0 2.89-6.8c.016-.2.021-.39.025-.6s0-.44-.012-.661c0-.1 0-.193-.012-.288a11.353 11.353 0 0 0-3.612-7.649.248.248 0 0 0-.045-.049c-.169-.152-.334-.3-.508-.444a11.635 11.635 0 0 0-3.682-2.042 9.783 9.783 0 0 0-.409-.132 11.34 11.34 0 0 0-2.575-.448 1.038 1.038 0 0 0-.776.284l-.009.008-.1.095A16.772 16.772 0 0 0 .005 20.476c-.107 5.023 2.163 8 4.933 9.256a1.1 1.1 0 0 0 .1.041v31.693l-.491.119-3.3 1.077-.532.136v1.327h23.35v-1.319l-4.318-1.332V39.818h4.9q14.8 0 21.221-4.838t6.414-14.247q.008-9.413-6.407-14.254zM247.25 39.13a22.924 22.924 0 0 0-5.855-6.138c-2.267-1.619-5.27-3.5-8.926-5.577-3.089-1.767-5.584-3.308-7.414-4.579a18.907 18.907 0 0 1-4.514-4.368 9.122 9.122 0 0 1-1.792-5.514 9.41 9.41 0 0 1 2.326-6.558 7.223 7.223 0 0 1 5.515-2.548 11.721 11.721 0 0 1 6.851 2.086 18.793 18.793 0 0 1 5.071 5.354 25.215 25.215 0 0 1 3.341 7.419l.087.318h4.249V1.685h-2.713l-.092.046c-.1.049-.326.19-1.828 1.267a16.08 16.08 0 0 0-2.854 3.236 20.2 20.2 0 0 0-3.534-2.5 20.881 20.881 0 0 0-10.32-2.923 30.635 30.635 0 0 0-11.93 2.074 16.757 16.757 0 0 0-7.372 5.617 13.57 13.57 0 0 0-2.472 7.925 17.393 17.393 0 0 0 2.6 9.553 24.5 24.5 0 0 0 6.2 6.665 94.347 94.347 0 0 0 9.365 5.837c3.111 1.794 5.409 3.206 7.024 4.319a17.607 17.607 0 0 1 4.125 3.9 7.9 7.9 0 0 1 1.61 4.859 10.269 10.269 0 0 1-2.83 7.585 10.379 10.379 0 0 1-7.621 2.823c-5.463 0-9.975-2.477-13.408-7.36a27.04 27.04 0 0 1-3.6-7.516l-.094-.3h-4.239v17.345h2.712l.094-.049c.15-.078.755-.5 1.827-1.271a15.4 15.4 0 0 0 2.848-3.206 16.224 16.224 0 0 0 3.816 2.568 25.522 25.522 0 0 0 11.784 2.829 34.725 34.725 0 0 0 13.321-2.293 18.477 18.477 0 0 0 8.284-6.268 15.032 15.032 0 0 0 2.78-8.788 15.3 15.3 0 0 0-2.422-8.529zM145.306 39.218L117.814 7.984a22.764 22.764 0 0 0-5.134-4.57 14.188 14.188 0 0 0-7.562-1.735h-9.707v2.076l6.183 1.759v40.675h3.511V18.227l40.18 45.906h3.529V23.901h-3.511z"></path>
              </g>
              <g className="fill-customGreen">
                <path d="M103.229 51.784h-1.653l-.041.386c-.834 7.83-11.726 8.815-12.344 8.864H75.258V5.051l5.3-1.324V1.641H54.511v2.087l5.3 1.324v55.637l-5.3 1.324V64.1h50.591V51.786h-1.873zM145.282 1.679v17.3h3.543v-.431a13.047 13.047 0 0 1 .094-1.584c.007-.074.014-.151.033-.259l.012-.1a15.162 15.162 0 0 1 6.247-10.034l.127-.08a9.036 9.036 0 0 1 4.2-1.739c.092-.007.179-.011.267-.011h4.747v55.987l-5.3 1.319v2.087h26.051v-2.087l-5.3-1.319V4.74h4.7a8.557 8.557 0 0 1 4.471 1.747l.113.075a15.168 15.168 0 0 1 6.261 10.055l.015.119c.015.076.021.157.03.246a12.861 12.861 0 0 1 .091 1.562v.431h3.52v-17.3z"></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
            <div>
              <h2 className="font-semibold mb-4">Shop</h2>
              <ul className="mb-6">
                <li>
                  <a href="#" className="hover:underline">
                    All houseplants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    All Baby houseplants
                  </a>
                </li>
              </ul>

              <h2 className="font-bold mb-4">My account</h2>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Log in
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-4">Customer service</h2>
              <ul className="mb-6">
                <li>
                  <a href="#" className="hover:underline">
                    Frequently asked questions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Transport and delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Guarantee
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Return policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-4">About PLNTS</h2>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Giftcard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    B2B
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Collaborations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Job opportunities
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="md:col-span-1">
                <div className="mb-4 flex space-x-4">
                  <a href="#">
                    <svg className="w-8 fill-background text-footer-foreground" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 118.7 118.7">
                      <path d="M59.35 0a59.35 59.35 0 1059.35 59.35A59.35 59.35 0 0059.35 0zm31.26 62.32q-8.66 6.51-28.47 6.51h-6.58v29.18l5.79 1.79v1.79H30.02V99.8l.72-.18 4.42-1.45.66-.16v-42.7h-.14c-3.73-1.75-6.73-5.76-6.61-12.52a22.65 22.65 0 016.61-15.59l.13-.12a1.4 1.4 0 011-.38 15.19 15.19 0 013.46.61l.55.17a14.4 14.4 0 012.77 1.25 15.5 15.5 0 012.17 1.5c.23.19.45.4.68.6l.06.07a15.26 15.26 0 014.84 10.3 2.48 2.48 0 010 .39V43.29a15.51 15.51 0 01-3.87 9.16 16.57 16.57 0 01-2.49 2.07l-.24.16c-.42-.55-.81-1.12-1.16-1.67a31.66 31.66 0 01-4.36-11.66.88.88 0 000-.24.2.2 0 00-.22-.19 22.9 22.9 0 00-.29 3.13 20.9 20.9 0 00.82 6.26 19.9 19.9 0 001.12 3 2.56 2.56 0 01.11.24v.06-.06c.16.31.33.61.5.92 0 0 0 .09.08.14.22.38.45.75.69 1.12l.19.26c.19.28.38.56.59.82s.29.39.44.57l.31.38c2.29 2.39 7.53 6.44 16.88 6.44 18.28 0 18.39-21.09 18.39-21.09q0-11.13-4.6-16.93a14.76 14.76 0 00-12.14-5.79h-6.52v14.3a2.76 2.76 0 00-.18-.39 21.69 21.69 0 00-8.21-8.87h-.06l-.1-.06a4.5 4.5 0 00-.43-.27 25.69 25.69 0 00-2.64-1.47 34.1 34.1 0 00-8.11-2.62 24.67 24.67 0 00-5.78-.67V17.41h32.08q19.81 0 28.47 6.54t8.6 19.2q0 12.65-8.6 19.17z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg className="w-8 fill-background text-footer-foreground" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 118.7 118.7">
                      <path d="M59.35 0a59.35 59.35 0 1059.35 59.35A59.35 59.35 0 0059.35 0zm38.54 82.63a20.52 20.52 0 01-2 5.86c-3.17 6.17-10.56 13.1-28.12 13.1H33.12v-3a12.89 12.89 0 0013-12.84c0-2.79-.94-5.32-2.53-8.31a27.8 27.8 0 00-9-9.61c-.62-.39-1.71-1-1.89-1.08s-.34.22-.17.35a29.64 29.64 0 015.42 5.72 14 14 0 012.91 6.43 11.24 11.24 0 01-6.33.76c-5.58-.89-11.26-5.46-13.58-16.14a24.49 24.49 0 01-.47-3.29 1.73 1.73 0 011.3-1.78 28.64 28.64 0 0112.74-.1 15.71 15.71 0 015.26 2.25c3.64 2.46 5 4.62 5.76 6.65a10.09 10.09 0 01-.13 7.77 30.43 30.43 0 013.07 7.19 13.1 13.1 0 018.4-6.24h.07a.21.21 0 00.13-.19.21.21 0 00-.2-.2 14.34 14.34 0 00-3.46.45 11.54 11.54 0 00-3.67 1.79 6.33 6.33 0 011.15-5 7.7 7.7 0 012-2 9.47 9.47 0 013.56-1.4 13.87 13.87 0 012-.22 12.83 12.83 0 014.38.61 20.53 20.53 0 018.25 5.44 1.16 1.16 0 01.28 1.23l-.14.3a13 13 0 01-11.71 7.41 12 12 0 01-3.84-.59 15.2 15.2 0 01-3-1.43 5.45 5.45 0 00-.7.62 6.58 6.58 0 00-1.61 4.61A9 9 0 0051.98 93c2 2.89 5.93 4.72 11.4 4.72 10.32 0 16.65-8.62 16.65-19a19.85 19.85 0 00-18.32-19.7c-.5 0-1-.06-1.49-.06h-4.75a18 18 0 01-9.67-3.13 19.29 19.29 0 01-3.42-3c-.22-.24-.43-.49-.63-.74-.45-.55-.86-1.12-1.25-1.68a28 28 0 01-4.24-10.46c0-.07-.08-.46-.08-.53a.19.19 0 00-.36-.06v.1a20.31 20.31 0 00-.22 2.93 18.89 18.89 0 003.35 10.82 9.38 9.38 0 01-1.91.23c-5.52.08-10.34-4.69-10.34-12.26a20.92 20.92 0 016-14.68 1.28 1.28 0 011-.39 14.36 14.36 0 019 3.64l.06.05a14.2 14.2 0 014.71 9.45 9.58 9.58 0 01.06 1.19 13.71 13.71 0 01-3.44 9.3 16.63 16.63 0 0022.58 2.49 16.08 16.08 0 005.86-7.77 15.1 15.1 0 00.88-7.26 16.92 16.92 0 00-16-14.93 13.9 13.9 0 00-4.33.34v12.2a20.26 20.26 0 00-6.64-9.71 20.94 20.94 0 00-13.27-4.72v-2.94l25.35.1q18.34.09 26.94 5.95t8.56 15.21q0 6.49-3.79 10.44a22.51 22.51 0 01-9.53 5.81 37.76 37.76 0 01-6.28 1.6s22.21 1.64 23.7 20.47a20.57 20.57 0 01-.23 5.61z" />
                    </svg>
                  </a>
                </div>
                <div className="flex space-x-3">
                  <a href="https://www.facebook.com/PLNTScom" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on facebook">
                    <svg
                      className="h-8 w-8 customftrgrn "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 74.84 74.84"
                    >
                      <circle cx="37.42" cy="37.42" r="36" fill="white" />

                      <g fill="none" stroke="#5E6846" stroke-width="2.5">
                        <path d="M29.37,59.73h-5.31c-4.94,0-8.94-8.94-8.94-8.94v-26.74c0-4.94,0-8.94,8.94-8.94h26.74c4.94,0,8.94,4.94,8.94,8.94v26.74c0,4.94-4.94,8.94-8.94,8.94h-26.74Z" />
                        <path d="M43.46,27.21h-4.69c-2,0-3.63,1.62-3.63,3.63v28.89" />
                        <line x1="31.14" y1="39.08" x2="41.57" y2="39.08" />
                      </g>
                    </svg>
                  </a>

                  <a href="https://www.pinterest.com/plnts_com/" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on pinterest">
                    <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-[3.5px] text-customftrgrn fill-background " viewBox="0 0 74.84 74.84" fill="none" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                        <path d="M25.71,56.62c-6.46-3.95-10.77-11.07-10.77-19.19,0-12.42,10.07-22.48,22.48-22.48s22.48,10.07,22.48,22.48-10.07,22.48-22.48,22.48c-2.33,0-4.57-.35-6.68-1.01,1.73-11.51,6.86-20.16,6.86-20.16,1.36-2.55.44-3.78,0-4.23-.62-.63-1.37-.8-2.21-.62h0s0,0,0,0h0c-1.35.3-1.73,1.82-1.84,3.33-.09,1.27.94,12.42,8.14,11.46h-.04c3.09-.6,6.81-3.41,6.81-10.99,0-6.48-4.88-10.31-11-10.31s-11.09,5.25-11.09,11.73c0,1.92.49,4.14,1.8,5.45" />
                      </svg>
                    </span>
                  </a>


                  <a href="https://www.youtube.com/@plnts_com" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on YouTube">
                    <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-[3.5px] text-customftrgrn " viewBox="0 0 74.84 74.84" fill="none" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                        <path d="M19.26,59.73h-2.3c-4.94,0-8.94-4-8.94-8.94v-26.74c0-4.94,4-8.94,8.94-8.94h40.91c4.94,0,8.94,4,8.94,8.94v26.74c0,4.94-4,8.94-8.94,8.94H25.12" />
                        <path d="M29.82,41.04v-12.12c0-1.18,1.27-1.92,2.3-1.34l14.97,8.5c1.04.59,1.04,2.08,0,2.67l-14.97,8.5c-1.02.58-2.29-.16-2.29-1.34v-4.88" />
                      </svg>
                    </span>
                  </a>


                  <a href="https://www.tiktok.com/@plnts.com" target="_blank" rel="noreferrer noopener" aria-label="follow PLNTS.com on TikTok">
                    <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-[3.5px] text-customftrgrn " viewBox="0 0 74.84 74.84" fill="none" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                        <path d="M36.66,41.63c-1.08-.45-2.28-.7-3.52-.7-5.05,0-9.14,4.09-9.14,9.14s4.09,9.14,9.14,9.14,9.14-4.09,9.14-9.14v.06-22.75c2.06,8.65,9.06,8.65,9.06,8.65" />
                        <path d="M18.27,49.21c-2.12-3.43-3.34-7.47-3.34-11.79,0-12.42,10.07-22.48,22.48-22.48s22.48,10.07,22.48,22.48-10.07,22.48-22.48,22.48c-2.5,0-4.9-.41-7.15-1.16" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-[0.9rem] mb-4">What's the word on the street?</h2>
              <p className="mb-4 text-[0.9rem]">Be part of our community by subscribing to our newsletters!</p>
              <form action="#" className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-8 py-2 border border-gray-300 w-[15rem] text-gray-800"
                />
                <button className="bg-[#DEBE48] text-white px-8 w-[15rem] py-2 rounded-3xl hover:bg-[#d4a93e]">
                  Surprise me!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f9f6ef] border-t border-customftrgrn px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:px-8">
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <img src="https://plnts.com/_next/static/media/ideal.f54a3ddb.svg" alt="iDEAL" className="w-[48px] h-[36px] md:w-[64px] md:h-[48px]" />
            <img src="https://plnts.com/_next/static/media/mastercard.c2b019d2.svg" alt="Mastercard" className="w-[48px] h-[36px] md:w-[64px] md:h-[48px]" />
            <img src="https://plnts.com/_next/static/media/visa.dcd93d2f.svg" alt="Visa" className="w-[48px] h-[36px] md:w-[64px] md:h-[48px]" />
            <img src="https://plnts.com/_next/static/media/paypal.8cf8f342.svg" alt="PayPal" className="w-[48px] h-[36px] md:w-[64px] md:h-[48px]" />
            <img src="https://plnts.com/_next/static/media/bancontact.77d197e3.svg" alt="Bancontact" className="w-[48px] h-[36px] md:w-[64px] md:h-[48px]" />
            <img src="https://plnts.com/_next/static/media/eps.37376336.svg" alt="EPS" className="w-[48px] h-[36px] md:w-[64px] md:h-[48px]" />
            <img src="https://plnts.com/_next/static/media/klarna.f163c258.svg" alt="Klarna" className="w-[48px] h-[36px] md:w-[64px] md:h-[48px]" />
            <img src="https://plnts.com/_next/static/media/applepay.36a647c4.svg" alt="Apple Pay" className="w-[48px] h-[36px] md:w-[64px] md:h-[48px]" />
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-[0.8rem] text-customftrgrn text-center md:text-left">
            <a href="#" className="hover:underline">Terms & conditions</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>

        <div className="mt-4 pt-4 text-center text-[0.9rem] text-customftrgrn">
          <div className="border-t border-customftrgrn mb-4 mx-4 md:mx-10"></div>
          © 2024 - PLNTS.com
        </div>
      </div>

    </footer>
  );
}
