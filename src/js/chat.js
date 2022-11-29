import utils from './utils';

/*-----------------------------------------------
|   Chat
-----------------------------------------------*/
const chatInit = () => {
  const Events = {
    CLICK: 'click',
    SHOWN_BS_TAB: 'shown.bs.tab',
    KEYUP: 'keyup',
    EMOJI: 'emoji',
  };

  const Selector = {
    CHAT_SIDEBAR: '.chat-sidebar',
    CHAT_CONTACT: '.chat-contact',
    CHAT_CONTENT_SCROLL_AREA: '.chat-content-scroll-area',
    CHAT_CONTENT_SCROLL_AREA_ACTIVE:
      '.card-chat-pane.active .chat-content-scroll-area',
    CHAT_EMOJIAREA: '.chat-editor-area .emojiarea-editor',
    BTN_SEND: '.btn-send',
    EMOJIEAREA_EDITOR: '.emojiarea-editor',
    BTN_INFO: '.btn-chat-info',
    CONVERSATION_INFO: '.conversation-info',
    CONTACTS_LIST_SHOW: '.contacts-list-show',
  };

  const ClassName = {
    UNREAD_MESSAGE: 'unread-message',
    TEXT_PRIMARY: 'text-primary',
    SHOW: 'show',
  };

  const DATA_KEY = {
    INDEX: 'index',
  };

  const $chatSidebar = document.querySelector(Selector.CHAT_SIDEBAR);
  const $chatContact = document.querySelectorAll(Selector.CHAT_CONTACT);
  const $chatEmojiarea = document.querySelector(Selector.CHAT_EMOJIAREA);
  const $btnSend = document.querySelector(Selector.BTN_SEND);
  const $currentChatArea = document.querySelector(
    Selector.CHAT_CONTENT_SCROLL_AREA
  );

  // Set scrollbar position
  const setScrollbarPosition = ($chatArea) => {
    if ($chatArea) {
      const scrollArea = $chatArea;
      scrollArea.scrollTop = $chatArea.scrollHeight;
    }
  };

  setTimeout(() => {
    setScrollbarPosition($currentChatArea);
  }, 700);

  document.querySelectorAll(Selector.CHAT_CONTACT).forEach((el) => {
    el.addEventListener(Events.CLICK, (e) => {
      const $this = e.currentTarget;
      $this.classList.add('active');
      // Hide contact list sidebar on responsive
      window.innerWidth < 768 &&
        !e.target.classList.contains('hover-actions') &&
        ($chatSidebar.style.left = '-100%');

      // Remove unread-message class when read
      $this.classList.contains(ClassName.UNREAD_MESSAGE) &&
        $this.classList.remove(ClassName.UNREAD_MESSAGE);
    });
  });

  $chatContact.forEach((el) => {
    el.addEventListener(Events.SHOWN_BS_TAB, () => {
      $chatEmojiarea.innerHTML = '';
      $btnSend.classList.remove(ClassName.TEXT_PRIMARY);
      const TargetChatArea = document.querySelector(
        Selector.CHAT_CONTENT_SCROLL_AREA_ACTIVE
      );
      setScrollbarPosition(TargetChatArea);
    });
  });

  // change send button color on

  if ($chatEmojiarea) {
    $chatEmojiarea.setAttribute('placeholder', 'Type your message');
    $chatEmojiarea.addEventListener(Events.KEYUP, (e) => {
      if (e.target.textContent.length <= 0) {
        $btnSend.classList.remove(ClassName.TEXT_PRIMARY);
        if (e.target.innerHTML === '<br>') {
          e.target.innerHTML = '';
        }
      } else {
        $btnSend.classList.add(ClassName.TEXT_PRIMARY);
      }

      const TargetChatArea = document.querySelector(
        Selector.CHAT_CONTENT_SCROLL_AREA_ACTIVE
      );
      setScrollbarPosition(TargetChatArea);
    });
  }
  // Open conversation info sidebar
  $chatEmojiarea &&
    document.querySelectorAll(Selector.BTN_INFO).forEach((el) => {
      el.addEventListener(Events.CLICK, (e) => {
        const $this = e.currentTarget;
        const dataIndex = utils.getData($this, DATA_KEY.INDEX);
        const $info = document.querySelector(
          `${Selector.CONVERSATION_INFO}[data-${DATA_KEY.INDEX}='${dataIndex}']`
        );
        $info.classList.toggle(ClassName.SHOW);
      });
    });

  // Show contact list sidebar on responsive
  document.querySelectorAll(Selector.CONTACTS_LIST_SHOW).forEach((el) => {
    el.addEventListener(Events.CLICK, function () {
      $chatSidebar.style.left = 0;
    });
  });

  // Set scrollbar area height on resize
  utils.resize(() => {
    const TargetChatArea = document.querySelector(
      Selector.CHAT_CONTENT_SCROLL_AREA_ACTIVE
    );
    setScrollbarPosition(TargetChatArea);
  });

  // Emoji append in message text
  $chatEmojiarea &&
    window.picker.on(Events.EMOJI, (selection) => {
      document.querySelector(Selector.EMOJIEAREA_EDITOR).innerHTML +=
        selection.emoji;
    });
};

export default chatInit;
