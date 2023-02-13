import { commentCells } from './globals'

const iconHeart = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
  />
</svg>

`

export function replaceHeart() {
  commentCells.find('.small.fade').addClass('heart-box').find('img[alt="❤️"]').replaceWith(`
      <span class="icon-heart">
        ${iconHeart}
      </span>
    `)
}

export function setControls() {
  const thankAreas = commentCells.find('.thank_area')

  thankAreas.each((_, el) => {
    const thankArea = $(el)
    const thanked = thankArea.hasClass('thanked')

    const control = $('<span class="control-area">')

    const thankIcon = $(`
      <span class="control">
        ${iconHeart}
      </span>
    `)

    if (thanked) {
      thankIcon.attr('title', '已感谢').css({ color: '#f43f5e', cursor: 'default' })
      control.append($('<a>').append(thankIcon))
    } else {
      const hide = thankArea.find('> a').eq(0).removeClass('thank')
      const thank = thankArea.find('> a').eq(1).removeClass('thank')

      hide.html(`
        <span class="control effect-btn" title="隐藏">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        </span>
      `)

      thankIcon.attr('title', '感谢').addClass('effect-btn')
      thank.empty().append(thankIcon)

      control.append(hide).append(thank)
    }

    const reply = thankArea.find('+ a')

    reply.find('> img[alt="Reply"]').replaceWith(`
      <span class="control effect-btn" title="回复">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </span>
    `)

    control.append(reply)

    control.replaceAll(thankArea)
  })
}
