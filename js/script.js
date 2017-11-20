/* compressed to make it load faster */

function display_random_image() {
    for(var a=[ {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/grinning-face_1f600.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/grinning-face-with-smiling-eyes_1f601.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-tears-of-joy_1f602.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rolling-on-the-floor-laughing_1f923.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-face-with-open-mouth_1f603.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-face-with-open-mouth-and-cold-sweat_1f605.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/winking-face_1f609.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-face-with-smiling-eyes_1f60a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-savouring-delicious-food_1f60b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-face-with-sunglasses_1f60e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-face-with-heart-shaped-eyes_1f60d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-throwing-a-kiss_1f618.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kissing-face_1f617.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kissing-face-with-smiling-eyes_1f619.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kissing-face-with-closed-eyes_1f61a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-smiling-face_263a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/slightly-smiling-face_1f642.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hugging-face_1f917.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/grinning-face-with-star-eyes_1f929.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thinking-face_1f914.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-one-eyebrow-raised_1f928.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/neutral-face_1f610.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/expressionless-face_1f611.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-without-mouth_1f636.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-rolling-eyes_1f644.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smirking-face_1f60f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/persevering-face_1f623.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/disappointed-but-relieved-face_1f625.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-open-mouth_1f62e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/zipper-mouth-face_1f910.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hushed-face_1f62f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sleepy-face_1f62a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tired-face_1f62b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sleeping-face_1f634.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/relieved-face_1f60c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-stuck-out-tongue_1f61b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-stuck-out-tongue-and-winking-eye_1f61c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-stuck-out-tongue-and-tightly-closed-eyes_1f61d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/drooling-face_1f924.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/unamused-face_1f612.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-cold-sweat_1f613.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pensive-face_1f614.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/confused-face_1f615.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/upside-down-face_1f643.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/money-mouth-face_1f911.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/astonished-face_1f632.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-frowning-face_2639.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/slightly-frowning-face_1f641.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/confounded-face_1f616.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/disappointed-face_1f61e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/worried-face_1f61f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-look-of-triumph_1f624.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/crying-face_1f622.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/loudly-crying-face_1f62d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/frowning-face-with-open-mouth_1f626.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/anguished-face_1f627.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fearful-face_1f628.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/weary-face_1f629.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shocked-face-with-exploding-head_1f92f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/grimacing-face_1f62c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-open-mouth-and-cold-sweat_1f630.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-screaming-in-fear_1f631.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flushed-face_1f633.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/grinning-face-with-one-large-and-one-small-eye_1f92a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dizzy-face_1f635.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pouting-face_1f621.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/angry-face_1f620.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/serious-face-with-symbols-covering-mouth_1f92c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-medical-mask_1f637.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-thermometer_1f912.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-head-bandage_1f915.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nauseated-face_1f922.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-open-mouth-vomiting_1f92e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sneezing-face_1f927.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-face-with-halo_1f607.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-cowboy-hat_1f920.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clown-face_1f921.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lying-face_1f925.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-finger-covering-closed-lips_1f92b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-face-with-smiling-eyes-and-hand-covering-mouth_1f92d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-monocle_1f9d0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nerd-face_1f913.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-face-with-horns_1f608.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/imp_1f47f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/japanese-ogre_1f479.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/japanese-goblin_1f47a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/skull_1f480.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/skull-and-crossbones_2620.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ghost_1f47b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/extraterrestrial-alien_1f47d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/alien-monster_1f47e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/robot-face_1f916.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pile-of-poo_1f4a9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-cat-face-with-open-mouth_1f63a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/grinning-cat-face-with-smiling-eyes_1f638.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cat-face-with-tears-of-joy_1f639.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-cat-face-with-heart-shaped-eyes_1f63b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cat-face-with-wry-smile_1f63c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kissing-cat-face-with-closed-eyes_1f63d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/weary-cat-face_1f640.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/crying-cat-face_1f63f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pouting-cat-face_1f63e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/see-no-evil-monkey_1f648.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hear-no-evil-monkey_1f649.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/speak-no-evil-monkey_1f64a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby_1f476.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby_emoji-modifier-fitzpatrick-type-1-2_1f476-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby_emoji-modifier-fitzpatrick-type-3_1f476-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby_emoji-modifier-fitzpatrick-type-4_1f476-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby_emoji-modifier-fitzpatrick-type-5_1f476-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby_emoji-modifier-fitzpatrick-type-6_1f476-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/child_1f9d2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/child_emoji-modifier-fitzpatrick-type-1-2_1f9d2-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/child_emoji-modifier-fitzpatrick-type-3_1f9d2-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/child_emoji-modifier-fitzpatrick-type-4_1f9d2-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/child_emoji-modifier-fitzpatrick-type-5_1f9d2-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/child_emoji-modifier-fitzpatrick-type-6_1f9d2-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/boy_1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/boy_emoji-modifier-fitzpatrick-type-1-2_1f466-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/boy_emoji-modifier-fitzpatrick-type-3_1f466-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/boy_emoji-modifier-fitzpatrick-type-4_1f466-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/boy_emoji-modifier-fitzpatrick-type-5_1f466-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/boy_emoji-modifier-fitzpatrick-type-6_1f466-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/girl_1f467.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/girl_emoji-modifier-fitzpatrick-type-1-2_1f467-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/girl_emoji-modifier-fitzpatrick-type-3_1f467-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/girl_emoji-modifier-fitzpatrick-type-4_1f467-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/girl_emoji-modifier-fitzpatrick-type-5_1f467-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/girl_emoji-modifier-fitzpatrick-type-6_1f467-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/adult_1f9d1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/adult_emoji-modifier-fitzpatrick-type-1-2_1f9d1-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/adult_emoji-modifier-fitzpatrick-type-3_1f9d1-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/adult_emoji-modifier-fitzpatrick-type-4_1f9d1-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/adult_emoji-modifier-fitzpatrick-type-5_1f9d1-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/adult_emoji-modifier-fitzpatrick-type-6_1f9d1-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man_1f468.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man_emoji-modifier-fitzpatrick-type-1-2_1f468-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man_emoji-modifier-fitzpatrick-type-3_1f468-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man_emoji-modifier-fitzpatrick-type-4_1f468-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man_emoji-modifier-fitzpatrick-type-5_1f468-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man_emoji-modifier-fitzpatrick-type-6_1f468-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman_1f469.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman_emoji-modifier-fitzpatrick-type-1-2_1f469-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman_emoji-modifier-fitzpatrick-type-3_1f469-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman_emoji-modifier-fitzpatrick-type-4_1f469-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman_emoji-modifier-fitzpatrick-type-5_1f469-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman_emoji-modifier-fitzpatrick-type-6_1f469-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-adult_1f9d3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-adult_emoji-modifier-fitzpatrick-type-1-2_1f9d3-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-adult_emoji-modifier-fitzpatrick-type-3_1f9d3-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-adult_emoji-modifier-fitzpatrick-type-4_1f9d3-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-adult_emoji-modifier-fitzpatrick-type-5_1f9d3-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-adult_emoji-modifier-fitzpatrick-type-6_1f9d3-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-man_1f474.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-man_emoji-modifier-fitzpatrick-type-1-2_1f474-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-man_emoji-modifier-fitzpatrick-type-3_1f474-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-man_emoji-modifier-fitzpatrick-type-4_1f474-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-man_emoji-modifier-fitzpatrick-type-5_1f474-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-man_emoji-modifier-fitzpatrick-type-6_1f474-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-woman_1f475.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-woman_emoji-modifier-fitzpatrick-type-1-2_1f475-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-woman_emoji-modifier-fitzpatrick-type-3_1f475-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-woman_emoji-modifier-fitzpatrick-type-4_1f475-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-woman_emoji-modifier-fitzpatrick-type-5_1f475-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/older-woman_emoji-modifier-fitzpatrick-type-6_1f475-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-health-worker_1f468-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-health-worker-type-1-2_1f468-1f3fb-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-health-worker-type-3_1f468-1f3fc-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-health-worker-type-4_1f468-1f3fd-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-health-worker-type-5_1f468-1f3fe-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-health-worker-type-6_1f468-1f3ff-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-health-worker_1f469-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-health-worker-type-1-2_1f469-1f3fb-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-health-worker-type-3_1f469-1f3fc-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-health-worker-type-4_1f469-1f3fd-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-health-worker-type-5_1f469-1f3fe-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-health-worker-type-6_1f469-1f3ff-200d-2695-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-student_1f468-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-student-type-1-2_1f468-1f3fb-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-student-type-3_1f468-1f3fc-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-student-type-4_1f468-1f3fd-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-student-type-5_1f468-1f3fe-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-student-type-6_1f468-1f3ff-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-student_1f469-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-student-type-1-2_1f469-1f3fb-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-student-type-3_1f469-1f3fc-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-student-type-4_1f469-1f3fd-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-student-type-5_1f469-1f3fe-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-student-type-6_1f469-1f3ff-200d-1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-teacher_1f468-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-teacher-type-1-2_1f468-1f3fb-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-teacher-type-3_1f468-1f3fc-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-teacher-type-4_1f468-1f3fd-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-teacher-type-5_1f468-1f3fe-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-teacher-type-6_1f468-1f3ff-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-teacher_1f469-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-teacher-type-1-2_1f469-1f3fb-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-teacher-type-3_1f469-1f3fc-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-teacher-type-4_1f469-1f3fd-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-teacher-type-5_1f469-1f3fe-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-teacher-type-6_1f469-1f3ff-200d-1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-judge_1f468-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-judge-type-1-2_1f468-1f3fb-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-judge-type-3_1f468-1f3fc-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-judge-type-4_1f468-1f3fd-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-judge-type-5_1f468-1f3fe-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-judge-type-6_1f468-1f3ff-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-judge_1f469-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-judge-type-1-2_1f469-1f3fb-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-judge-type-3_1f469-1f3fc-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-judge-type-4_1f469-1f3fd-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-judge-type-5_1f469-1f3fe-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-judge-type-6_1f469-1f3ff-200d-2696-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-farmer_1f468-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-farmer-type-1-2_1f468-1f3fb-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-farmer-type-3_1f468-1f3fc-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-farmer-type-4_1f468-1f3fd-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-farmer-type-5_1f468-1f3fe-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-farmer-type-6_1f468-1f3ff-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-farmer_1f469-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-farmer-type-1-2_1f469-1f3fb-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-farmer-type-3_1f469-1f3fc-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-farmer-type-4_1f469-1f3fd-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-farmer-type-5_1f469-1f3fe-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-farmer-type-6_1f469-1f3ff-200d-1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-cook_1f468-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-cook-type-1-2_1f468-1f3fb-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-cook-type-3_1f468-1f3fc-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-cook-type-4_1f468-1f3fd-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-cook-type-5_1f468-1f3fe-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-cook-type-6_1f468-1f3ff-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-cook_1f469-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-cook-type-1-2_1f469-1f3fb-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-cook-type-3_1f469-1f3fc-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-cook-type-4_1f469-1f3fd-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-cook-type-5_1f469-1f3fe-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-cook-type-6_1f469-1f3ff-200d-1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-mechanic_1f468-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-mechanic-type-1-2_1f468-1f3fb-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-mechanic-type-3_1f468-1f3fc-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-mechanic-type-4_1f468-1f3fd-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-mechanic-type-5_1f468-1f3fe-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-mechanic-type-6_1f468-1f3ff-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-mechanic_1f469-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-mechanic-type-1-2_1f469-1f3fb-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-mechanic-type-3_1f469-1f3fc-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-mechanic-type-4_1f469-1f3fd-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-mechanic-type-5_1f469-1f3fe-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-mechanic-type-6_1f469-1f3ff-200d-1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-factory-worker_1f468-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-factory-worker-type-1-2_1f468-1f3fb-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-factory-worker-type-3_1f468-1f3fc-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-factory-worker-type-4_1f468-1f3fd-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-factory-worker-type-5_1f468-1f3fe-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-factory-worker-type-6_1f468-1f3ff-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-factory-worker_1f469-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-factory-worker-type-1-2_1f469-1f3fb-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-factory-worker-type-3_1f469-1f3fc-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-factory-worker-type-4_1f469-1f3fd-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-factory-worker-type-5_1f469-1f3fe-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-factory-worker-type-6_1f469-1f3ff-200d-1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-office-worker_1f468-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-office-worker-type-1-2_1f468-1f3fb-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-office-worker-type-3_1f468-1f3fc-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-office-worker-type-4_1f468-1f3fd-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-office-worker-type-5_1f468-1f3fe-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-office-worker-type-6_1f468-1f3ff-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-office-worker_1f469-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-office-worker-type-1-2_1f469-1f3fb-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-office-worker-type-3_1f469-1f3fc-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-office-worker-type-4_1f469-1f3fd-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-office-worker-type-5_1f469-1f3fe-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-office-worker-type-6_1f469-1f3ff-200d-1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-scientist_1f468-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-scientist-type-1-2_1f468-1f3fb-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-scientist-type-3_1f468-1f3fc-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-scientist-type-4_1f468-1f3fd-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-scientist-type-5_1f468-1f3fe-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-scientist-type-6_1f468-1f3ff-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-scientist_1f469-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-scientist-type-1-2_1f469-1f3fb-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-scientist-type-3_1f469-1f3fc-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-scientist-type-4_1f469-1f3fd-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-scientist-type-5_1f469-1f3fe-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-scientist-type-6_1f469-1f3ff-200d-1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-technologist_1f468-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-technologist-type-1-2_1f468-1f3fb-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-technologist-type-3_1f468-1f3fc-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-technologist-type-4_1f468-1f3fd-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-technologist-type-5_1f468-1f3fe-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-technologist-type-6_1f468-1f3ff-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-technologist_1f469-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-technologist-type-1-2_1f469-1f3fb-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-technologist-type-3_1f469-1f3fc-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-technologist-type-4_1f469-1f3fd-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-technologist-type-5_1f469-1f3fe-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-technologist-type-6_1f469-1f3ff-200d-1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-singer_1f468-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-singer-type-1-2_1f468-1f3fb-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-singer-type-3_1f468-1f3fc-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-singer-type-4_1f468-1f3fd-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-singer-type-5_1f468-1f3fe-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-singer-type-6_1f468-1f3ff-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-singer_1f469-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-singer-type-1-2_1f469-1f3fb-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-singer-type-3_1f469-1f3fc-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-singer-type-4_1f469-1f3fd-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-singer-type-5_1f469-1f3fe-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-singer-type-6_1f469-1f3ff-200d-1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-artist_1f468-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-artist-type-1-2_1f468-1f3fb-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-artist-type-3_1f468-1f3fc-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-artist-type-4_1f468-1f3fd-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-artist-type-5_1f468-1f3fe-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-artist-type-6_1f468-1f3ff-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-artist_1f469-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-artist-type-1-2_1f469-1f3fb-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-artist-type-3_1f469-1f3fc-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-artist-type-4_1f469-1f3fd-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-artist-type-5_1f469-1f3fe-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-artist-type-6_1f469-1f3ff-200d-1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-pilot_1f468-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-pilot-type-1-2_1f468-1f3fb-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-pilot-type-3_1f468-1f3fc-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-pilot-type-4_1f468-1f3fd-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-pilot-type-5_1f468-1f3fe-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-pilot-type-6_1f468-1f3ff-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-pilot_1f469-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-pilot-type-1-2_1f469-1f3fb-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-pilot-type-3_1f469-1f3fc-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-pilot-type-4_1f469-1f3fd-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-pilot-type-5_1f469-1f3fe-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-pilot-type-6_1f469-1f3ff-200d-2708-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-astronaut_1f468-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-astronaut-type-1-2_1f468-1f3fb-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-astronaut-type-3_1f468-1f3fc-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-astronaut-type-4_1f468-1f3fd-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-astronaut-type-5_1f468-1f3fe-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-astronaut-type-6_1f468-1f3ff-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-astronaut_1f469-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-astronaut-type-1-2_1f469-1f3fb-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-astronaut-type-3_1f469-1f3fc-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-astronaut-type-4_1f469-1f3fd-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-astronaut-type-5_1f469-1f3fe-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-astronaut-type-6_1f469-1f3ff-200d-1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-firefighter_1f468-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-firefighter-type-1-2_1f468-1f3fb-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-firefighter-type-3_1f468-1f3fc-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-firefighter-type-4_1f468-1f3fd-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-firefighter-type-5_1f468-1f3fe-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-firefighter-type-6_1f468-1f3ff-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-firefighter_1f469-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-firefighter-type-1-2_1f469-1f3fb-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-firefighter-type-3_1f469-1f3fc-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-firefighter-type-4_1f469-1f3fd-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-firefighter-type-5_1f469-1f3fe-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-firefighter-type-6_1f469-1f3ff-200d-1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/police-officer_1f46e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/police-officer_emoji-modifier-fitzpatrick-type-1-2_1f46e-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/police-officer_emoji-modifier-fitzpatrick-type-3_1f46e-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/police-officer_emoji-modifier-fitzpatrick-type-4_1f46e-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/police-officer_emoji-modifier-fitzpatrick-type-5_1f46e-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/police-officer_emoji-modifier-fitzpatrick-type-6_1f46e-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-police-officer_1f46e-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-police-officer-type-1-2_1f46e-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-police-officer-type-3_1f46e-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-police-officer-type-4_1f46e-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-police-officer-type-5_1f46e-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-police-officer-type-6_1f46e-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-police-officer_1f46e-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-police-officer-type-1-2_1f46e-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-police-officer-type-3_1f46e-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-police-officer-type-4_1f46e-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-police-officer-type-5_1f46e-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-police-officer-type-6_1f46e-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sleuth-or-spy_1f575.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sleuth-or-spy_emoji-modifier-fitzpatrick-type-1-2_1f575-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sleuth-or-spy_emoji-modifier-fitzpatrick-type-3_1f575-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sleuth-or-spy_emoji-modifier-fitzpatrick-type-4_1f575-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sleuth-or-spy_emoji-modifier-fitzpatrick-type-5_1f575-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sleuth-or-spy_emoji-modifier-fitzpatrick-type-6_1f575-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-sleuth_1f575-fe0f-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-sleuth-type-1-2_1f575-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-sleuth-type-3_1f575-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-sleuth-type-4_1f575-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-sleuth-type-5_1f575-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-sleuth-type-6_1f575-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-sleuth_1f575-fe0f-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-sleuth-type-1-2_1f575-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-sleuth-type-3_1f575-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-sleuth-type-4_1f575-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-sleuth-type-5_1f575-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-sleuth-type-6_1f575-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/guardsman_1f482.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/guardsman_emoji-modifier-fitzpatrick-type-1-2_1f482-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/guardsman_emoji-modifier-fitzpatrick-type-3_1f482-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/guardsman_emoji-modifier-fitzpatrick-type-4_1f482-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/guardsman_emoji-modifier-fitzpatrick-type-5_1f482-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/guardsman_emoji-modifier-fitzpatrick-type-6_1f482-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-guard_1f482-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-guard-type-1-2_1f482-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-guard-type-3_1f482-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-guard-type-4_1f482-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-guard-type-5_1f482-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-guard-type-6_1f482-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-guard_1f482-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-guard-type-1-2_1f482-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-guard-type-3_1f482-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-guard-type-4_1f482-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-guard-type-5_1f482-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-guard-type-6_1f482-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/construction-worker_1f477.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/construction-worker_emoji-modifier-fitzpatrick-type-1-2_1f477-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/construction-worker_emoji-modifier-fitzpatrick-type-3_1f477-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/construction-worker_emoji-modifier-fitzpatrick-type-4_1f477-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/construction-worker_emoji-modifier-fitzpatrick-type-5_1f477-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/construction-worker_emoji-modifier-fitzpatrick-type-6_1f477-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-construction-worker_1f477-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-construction-worker-type-1-2_1f477-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-construction-worker-type-3_1f477-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-construction-worker-type-4_1f477-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-construction-worker-type-5_1f477-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/male-construction-worker-type-6_1f477-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-construction-worker_1f477-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-construction-worker-type-1-2_1f477-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-construction-worker-type-3_1f477-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-construction-worker-type-4_1f477-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-construction-worker-type-5_1f477-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/female-construction-worker-type-6_1f477-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/prince_1f934.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/prince_emoji-modifier-fitzpatrick-type-1-2_1f934-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/prince_emoji-modifier-fitzpatrick-type-3_1f934-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/prince_emoji-modifier-fitzpatrick-type-4_1f934-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/prince_emoji-modifier-fitzpatrick-type-5_1f934-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/prince_emoji-modifier-fitzpatrick-type-6_1f934-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/princess_1f478.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/princess_emoji-modifier-fitzpatrick-type-1-2_1f478-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/princess_emoji-modifier-fitzpatrick-type-3_1f478-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/princess_emoji-modifier-fitzpatrick-type-4_1f478-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/princess_emoji-modifier-fitzpatrick-type-5_1f478-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/princess_emoji-modifier-fitzpatrick-type-6_1f478-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-turban_1f473.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-turban_emoji-modifier-fitzpatrick-type-1-2_1f473-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-turban_emoji-modifier-fitzpatrick-type-3_1f473-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-turban_emoji-modifier-fitzpatrick-type-4_1f473-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-turban_emoji-modifier-fitzpatrick-type-5_1f473-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-turban_emoji-modifier-fitzpatrick-type-6_1f473-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-wearing-turban_1f473-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-wearing-turban-type-1-2_1f473-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-wearing-turban-type-3_1f473-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-wearing-turban-type-4_1f473-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-wearing-turban-type-5_1f473-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-wearing-turban-type-6_1f473-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-wearing-turban_1f473-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-wearing-turban-type-1-2_1f473-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-wearing-turban-type-3_1f473-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-wearing-turban-type-4_1f473-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-wearing-turban-type-5_1f473-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-wearing-turban-type-6_1f473-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-gua-pi-mao_1f472.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-gua-pi-mao_emoji-modifier-fitzpatrick-type-1-2_1f472-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-gua-pi-mao_emoji-modifier-fitzpatrick-type-3_1f472-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-gua-pi-mao_emoji-modifier-fitzpatrick-type-4_1f472-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-gua-pi-mao_emoji-modifier-fitzpatrick-type-5_1f472-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-gua-pi-mao_emoji-modifier-fitzpatrick-type-6_1f472-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-headscarf_1f9d5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-headscarf_emoji-modifier-fitzpatrick-type-1-2_1f9d5-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-headscarf_emoji-modifier-fitzpatrick-type-3_1f9d5-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-headscarf_emoji-modifier-fitzpatrick-type-4_1f9d5-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-headscarf_emoji-modifier-fitzpatrick-type-5_1f9d5-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-headscarf_emoji-modifier-fitzpatrick-type-6_1f9d5-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bearded-person_1f9d4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bearded-person_emoji-modifier-fitzpatrick-type-1-2_1f9d4-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bearded-person_emoji-modifier-fitzpatrick-type-3_1f9d4-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bearded-person_emoji-modifier-fitzpatrick-type-4_1f9d4-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bearded-person_emoji-modifier-fitzpatrick-type-5_1f9d4-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bearded-person_emoji-modifier-fitzpatrick-type-6_1f9d4-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-blond-hair_1f471.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-blond-hair_emoji-modifier-fitzpatrick-type-1-2_1f471-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-blond-hair_emoji-modifier-fitzpatrick-type-3_1f471-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-blond-hair_emoji-modifier-fitzpatrick-type-4_1f471-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-blond-hair_emoji-modifier-fitzpatrick-type-5_1f471-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-blond-hair_emoji-modifier-fitzpatrick-type-6_1f471-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blond-man_1f471-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blond-man-type-1-2_1f471-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blond-man-type-3_1f471-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blond-man-type-4_1f471-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blond-man-type-5_1f471-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blond-man-type-6_1f471-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blonde-woman_1f471-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blonde-woman-type-1-2_1f471-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blonde-woman-type-3_1f471-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blonde-woman-type-4_1f471-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blonde-woman-type-5_1f471-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blonde-woman-type-6_1f471-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-tuxedo_1f935.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-tuxedo_emoji-modifier-fitzpatrick-type-1-2_1f935-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-tuxedo_emoji-modifier-fitzpatrick-type-3_1f935-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-tuxedo_emoji-modifier-fitzpatrick-type-4_1f935-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-tuxedo_emoji-modifier-fitzpatrick-type-5_1f935-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-tuxedo_emoji-modifier-fitzpatrick-type-6_1f935-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bride-with-veil_1f470.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bride-with-veil_emoji-modifier-fitzpatrick-type-1-2_1f470-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bride-with-veil_emoji-modifier-fitzpatrick-type-3_1f470-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bride-with-veil_emoji-modifier-fitzpatrick-type-4_1f470-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bride-with-veil_emoji-modifier-fitzpatrick-type-5_1f470-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bride-with-veil_emoji-modifier-fitzpatrick-type-6_1f470-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pregnant-woman_1f930.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pregnant-woman_emoji-modifier-fitzpatrick-type-1-2_1f930-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pregnant-woman_emoji-modifier-fitzpatrick-type-3_1f930-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pregnant-woman_emoji-modifier-fitzpatrick-type-4_1f930-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pregnant-woman_emoji-modifier-fitzpatrick-type-5_1f930-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pregnant-woman_emoji-modifier-fitzpatrick-type-6_1f930-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/breast-feeding_1f931.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/breast-feeding_emoji-modifier-fitzpatrick-type-1-2_1f931-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/breast-feeding_emoji-modifier-fitzpatrick-type-3_1f931-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/breast-feeding_emoji-modifier-fitzpatrick-type-4_1f931-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/breast-feeding_emoji-modifier-fitzpatrick-type-5_1f931-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/breast-feeding_emoji-modifier-fitzpatrick-type-6_1f931-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby-angel_1f47c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby-angel_emoji-modifier-fitzpatrick-type-1-2_1f47c-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby-angel_emoji-modifier-fitzpatrick-type-3_1f47c-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby-angel_emoji-modifier-fitzpatrick-type-4_1f47c-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby-angel_emoji-modifier-fitzpatrick-type-5_1f47c-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby-angel_emoji-modifier-fitzpatrick-type-6_1f47c-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/father-christmas_1f385.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/father-christmas_emoji-modifier-fitzpatrick-type-1-2_1f385-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/father-christmas_emoji-modifier-fitzpatrick-type-3_1f385-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/father-christmas_emoji-modifier-fitzpatrick-type-4_1f385-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/father-christmas_emoji-modifier-fitzpatrick-type-5_1f385-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/father-christmas_emoji-modifier-fitzpatrick-type-6_1f385-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mother-christmas_1f936.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mother-christmas_emoji-modifier-fitzpatrick-type-1-2_1f936-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mother-christmas_emoji-modifier-fitzpatrick-type-3_1f936-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mother-christmas_emoji-modifier-fitzpatrick-type-4_1f936-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mother-christmas_emoji-modifier-fitzpatrick-type-5_1f936-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mother-christmas_emoji-modifier-fitzpatrick-type-6_1f936-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mage_1f9d9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mage_emoji-modifier-fitzpatrick-type-1-2_1f9d9-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mage_emoji-modifier-fitzpatrick-type-3_1f9d9-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mage_emoji-modifier-fitzpatrick-type-4_1f9d9-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mage_emoji-modifier-fitzpatrick-type-5_1f9d9-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mage_emoji-modifier-fitzpatrick-type-6_1f9d9-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mage_1f9d9-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mage-light-skin-tone_1f9d9-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mage-medium-light-skin-tone_1f9d9-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mage-medium-skin-tone_1f9d9-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mage-medium-dark-skin-tone_1f9d9-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mage-dark-skin-tone_1f9d9-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mage_1f9d9-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mage-light-skin-tone_1f9d9-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mage-medium-light-skin-tone_1f9d9-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mage-medium-skin-tone_1f9d9-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mage-medium-dark-skin-tone_1f9d9-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mage-dark-skin-tone_1f9d9-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fairy_1f9da.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fairy_emoji-modifier-fitzpatrick-type-1-2_1f9da-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fairy_emoji-modifier-fitzpatrick-type-3_1f9da-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fairy_emoji-modifier-fitzpatrick-type-4_1f9da-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fairy_emoji-modifier-fitzpatrick-type-5_1f9da-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fairy_emoji-modifier-fitzpatrick-type-6_1f9da-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-fairy_1f9da-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-fairy-light-skin-tone_1f9da-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-fairy-medium-light-skin-tone_1f9da-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-fairy-medium-skin-tone_1f9da-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-fairy-medium-dark-skin-tone_1f9da-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-fairy-dark-skin-tone_1f9da-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-fairy_1f9da-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-fairy-light-skin-tone_1f9da-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-fairy-medium-light-skin-tone_1f9da-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-fairy-medium-skin-tone_1f9da-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-fairy-medium-dark-skin-tone_1f9da-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-fairy-dark-skin-tone_1f9da-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/vampire_1f9db.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/vampire_emoji-modifier-fitzpatrick-type-1-2_1f9db-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/vampire_emoji-modifier-fitzpatrick-type-3_1f9db-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/vampire_emoji-modifier-fitzpatrick-type-4_1f9db-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/vampire_emoji-modifier-fitzpatrick-type-5_1f9db-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/vampire_emoji-modifier-fitzpatrick-type-6_1f9db-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-vampire_1f9db-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-vampire-light-skin-tone_1f9db-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-vampire-medium-light-skin-tone_1f9db-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-vampire-medium-skin-tone_1f9db-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-vampire-medium-dark-skin-tone_1f9db-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-vampire-dark-skin-tone_1f9db-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-vampire_1f9db-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-vampire-light-skin-tone_1f9db-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-vampire-medium-light-skin-tone_1f9db-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-vampire-medium-skin-tone_1f9db-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-vampire-medium-dark-skin-tone_1f9db-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-vampire-dark-skin-tone_1f9db-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merperson_1f9dc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merperson_emoji-modifier-fitzpatrick-type-1-2_1f9dc-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merperson_emoji-modifier-fitzpatrick-type-3_1f9dc-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merperson_emoji-modifier-fitzpatrick-type-4_1f9dc-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merperson_emoji-modifier-fitzpatrick-type-5_1f9dc-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merperson_emoji-modifier-fitzpatrick-type-6_1f9dc-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merwoman_1f9dc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merwoman-light-skin-tone_1f9dc-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merwoman-medium-light-skin-tone_1f9dc-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merwoman-medium-skin-tone_1f9dc-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merwoman-medium-dark-skin-tone_1f9dc-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merwoman-dark-skin-tone_1f9dc-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merman_1f9dc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merman-light-skin-tone_1f9dc-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merman-medium-light-skin-tone_1f9dc-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merman-medium-skin-tone_1f9dc-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merman-medium-dark-skin-tone_1f9dc-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/merman-dark-skin-tone_1f9dc-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/elf_1f9dd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/elf_emoji-modifier-fitzpatrick-type-1-2_1f9dd-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/elf_emoji-modifier-fitzpatrick-type-3_1f9dd-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/elf_emoji-modifier-fitzpatrick-type-4_1f9dd-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/elf_emoji-modifier-fitzpatrick-type-5_1f9dd-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/elf_emoji-modifier-fitzpatrick-type-6_1f9dd-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-elf_1f9dd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-elf-light-skin-tone_1f9dd-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-elf-medium-light-skin-tone_1f9dd-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-elf-medium-skin-tone_1f9dd-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-elf-medium-dark-skin-tone_1f9dd-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-elf-dark-skin-tone_1f9dd-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-elf_1f9dd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-elf-light-skin-tone_1f9dd-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-elf-medium-light-skin-tone_1f9dd-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-elf-medium-skin-tone_1f9dd-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-elf-medium-dark-skin-tone_1f9dd-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-elf-dark-skin-tone_1f9dd-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/genie_1f9de.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-genie_1f9de-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-genie_1f9de-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/zombie_1f9df.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-zombie_1f9df-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-zombie_1f9df-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-frowning_1f64d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-frowning_emoji-modifier-fitzpatrick-type-1-2_1f64d-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-frowning_emoji-modifier-fitzpatrick-type-3_1f64d-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-frowning_emoji-modifier-fitzpatrick-type-4_1f64d-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-frowning_emoji-modifier-fitzpatrick-type-5_1f64d-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-frowning_emoji-modifier-fitzpatrick-type-6_1f64d-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-frowning_1f64d-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-frowning-type-1-2_1f64d-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/emoji-modifier-fitzpatrick-type-1-2_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-frowning-type-3_1f64d-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/emoji-modifier-fitzpatrick-type-3_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/emoji-modifier-fitzpatrick-type-4_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/emoji-modifier-fitzpatrick-type-5_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-frowning-type-4_1f64d-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/emoji-modifier-fitzpatrick-type-6_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-frowning-type-5_1f64d-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-frowning-type-6_1f64d-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-frowning_1f64d-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-frowning-type-1-2_1f64d-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-frowning-type-3_1f64d-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-frowning-type-4_1f64d-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-frowning-type-5_1f64d-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-frowning-type-6_1f64d-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-pouting-face_1f64e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-pouting-face_emoji-modifier-fitzpatrick-type-1-2_1f64e-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-pouting-face_emoji-modifier-fitzpatrick-type-3_1f64e-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-pouting-face_emoji-modifier-fitzpatrick-type-4_1f64e-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-pouting-face_emoji-modifier-fitzpatrick-type-5_1f64e-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-pouting-face_emoji-modifier-fitzpatrick-type-6_1f64e-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-pouting_1f64e-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-pouting-type-1-2_1f64e-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-pouting-type-3_1f64e-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-pouting-type-4_1f64e-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-pouting-type-5_1f64e-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-pouting-type-6_1f64e-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-pouting_1f64e-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-pouting-type-1-2_1f64e-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-pouting-type-3_1f64e-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-pouting-type-4_1f64e-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-pouting-type-5_1f64e-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-pouting-type-6_1f64e-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-no-good-gesture_1f645.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-no-good-gesture_emoji-modifier-fitzpatrick-type-1-2_1f645-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-no-good-gesture_emoji-modifier-fitzpatrick-type-3_1f645-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-no-good-gesture_emoji-modifier-fitzpatrick-type-4_1f645-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-no-good-gesture_emoji-modifier-fitzpatrick-type-5_1f645-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-no-good-gesture_emoji-modifier-fitzpatrick-type-6_1f645-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-not-ok_1f645-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-not-ok-type-1-2_1f645-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-not-ok-type-3_1f645-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-not-ok-type-4_1f645-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-not-ok-type-5_1f645-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-not-ok-type-6_1f645-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-not-ok_1f645-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-not-ok-type-1-2_1f645-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-not-ok-type-3_1f645-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-not-ok-type-4_1f645-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-not-ok-type-5_1f645-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-not-ok-type-6_1f645-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-ok-gesture_1f646.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-ok-gesture_emoji-modifier-fitzpatrick-type-1-2_1f646-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-ok-gesture_emoji-modifier-fitzpatrick-type-3_1f646-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-ok-gesture_emoji-modifier-fitzpatrick-type-4_1f646-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-ok-gesture_emoji-modifier-fitzpatrick-type-5_1f646-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-with-ok-gesture_emoji-modifier-fitzpatrick-type-6_1f646-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-ok_1f646-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-ok-type-1-2_1f646-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-ok-type-3_1f646-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-ok-type-4_1f646-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-ok-type-5_1f646-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-gesturing-ok-type-6_1f646-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-ok_1f646-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-ok-type-1-2_1f646-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-ok-type-3_1f646-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-ok-type-4_1f646-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-ok-type-5_1f646-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-gesturing-ok-type-6_1f646-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/information-desk-person_1f481.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/information-desk-person_emoji-modifier-fitzpatrick-type-1-2_1f481-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/information-desk-person_emoji-modifier-fitzpatrick-type-3_1f481-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/information-desk-person_emoji-modifier-fitzpatrick-type-4_1f481-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/information-desk-person_emoji-modifier-fitzpatrick-type-5_1f481-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/information-desk-person_emoji-modifier-fitzpatrick-type-6_1f481-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-tipping-hand_1f481-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-tipping-hand-type-1-2_1f481-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-tipping-hand-type-3_1f481-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-tipping-hand-type-4_1f481-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-tipping-hand-type-5_1f481-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-tipping-hand-type-6_1f481-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-tipping-hand_1f481-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-tipping-hand-type-1-2_1f481-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-tipping-hand-type-3_1f481-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-tipping-hand-type-4_1f481-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-tipping-hand-type-5_1f481-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-tipping-hand-type-6_1f481-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/happy-person-raising-one-hand_1f64b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/happy-person-raising-one-hand_emoji-modifier-fitzpatrick-type-1-2_1f64b-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/happy-person-raising-one-hand_emoji-modifier-fitzpatrick-type-3_1f64b-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/happy-person-raising-one-hand_emoji-modifier-fitzpatrick-type-4_1f64b-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/happy-person-raising-one-hand_emoji-modifier-fitzpatrick-type-5_1f64b-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/happy-person-raising-one-hand_emoji-modifier-fitzpatrick-type-6_1f64b-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-raising-hand_1f64b-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-raising-hand-type-1-2_1f64b-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-raising-hand-type-3_1f64b-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-raising-hand-type-4_1f64b-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-raising-hand-type-5_1f64b-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-raising-hand-type-6_1f64b-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-raising-hand_1f64b-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-raising-hand-type-1-2_1f64b-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-raising-hand-type-3_1f64b-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-raising-hand-type-4_1f64b-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-raising-hand-type-5_1f64b-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-raising-hand-type-6_1f64b-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-bowing-deeply_1f647.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-bowing-deeply_emoji-modifier-fitzpatrick-type-1-2_1f647-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-bowing-deeply_emoji-modifier-fitzpatrick-type-3_1f647-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-bowing-deeply_emoji-modifier-fitzpatrick-type-4_1f647-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-bowing-deeply_emoji-modifier-fitzpatrick-type-5_1f647-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-bowing-deeply_emoji-modifier-fitzpatrick-type-6_1f647-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-bowing-deeply_1f647-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-bowing-deeply-type-1-2_1f647-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-bowing-deeply-type-3_1f647-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-bowing-deeply-type-4_1f647-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-bowing-deeply-type-5_1f647-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-bowing-deeply-type-6_1f647-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-bowing-deeply_1f647-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-bowing-deeply-type-1-2_1f647-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-bowing-deeply-type-3_1f647-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-bowing-deeply-type-4_1f647-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-bowing-deeply-type-5_1f647-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-bowing-deeply-type-6_1f647-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-palm_1f926.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-palm_emoji-modifier-fitzpatrick-type-1-2_1f926-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-palm_emoji-modifier-fitzpatrick-type-3_1f926-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-palm_emoji-modifier-fitzpatrick-type-4_1f926-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-palm_emoji-modifier-fitzpatrick-type-5_1f926-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-palm_emoji-modifier-fitzpatrick-type-6_1f926-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-facepalming_1f926-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-facepalming-type-1-2_1f926-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-facepalming-type-3_1f926-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-facepalming-type-4_1f926-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-facepalming-type-5_1f926-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-facepalming-type-6_1f926-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-facepalming_1f926-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-facepalming-type-1-2_1f926-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-facepalming-type-3_1f926-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-facepalming-type-4_1f926-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-facepalming-type-5_1f926-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-facepalming-type-6_1f926-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shrug_1f937.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shrug_emoji-modifier-fitzpatrick-type-1-2_1f937-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shrug_emoji-modifier-fitzpatrick-type-3_1f937-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shrug_emoji-modifier-fitzpatrick-type-4_1f937-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shrug_emoji-modifier-fitzpatrick-type-5_1f937-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shrug_emoji-modifier-fitzpatrick-type-6_1f937-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-shrugging_1f937-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-shrugging-type-1-2_1f937-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-shrugging-type-3_1f937-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-shrugging-type-4_1f937-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-shrugging-type-5_1f937-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-shrugging-type-6_1f937-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-shrugging_1f937-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-shrugging-type-1-2_1f937-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-shrugging-type-3_1f937-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-shrugging-type-4_1f937-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-shrugging-type-5_1f937-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-shrugging-type-6_1f937-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-massage_1f486.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-massage_emoji-modifier-fitzpatrick-type-1-2_1f486-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-massage_emoji-modifier-fitzpatrick-type-3_1f486-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-massage_emoji-modifier-fitzpatrick-type-4_1f486-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-massage_emoji-modifier-fitzpatrick-type-5_1f486-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/face-massage_emoji-modifier-fitzpatrick-type-6_1f486-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-face-massage_1f486-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-face-massage-type-1-2_1f486-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-face-massage-type-3_1f486-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-face-massage-type-4_1f486-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-face-massage-type-5_1f486-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-face-massage-type-6_1f486-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-face-massage_1f486-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-face-massage-type-1-2_1f486-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-face-massage-type-3_1f486-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-face-massage-type-4_1f486-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-face-massage-type-5_1f486-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-face-massage-type-6_1f486-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/haircut_1f487.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/haircut_emoji-modifier-fitzpatrick-type-1-2_1f487-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/haircut_emoji-modifier-fitzpatrick-type-3_1f487-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/haircut_emoji-modifier-fitzpatrick-type-4_1f487-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/haircut_emoji-modifier-fitzpatrick-type-5_1f487-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/haircut_emoji-modifier-fitzpatrick-type-6_1f487-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-haircut_1f487-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-haircut-type-1-2_1f487-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-haircut-type-3_1f487-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-haircut-type-4_1f487-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-haircut-type-5_1f487-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-getting-haircut-type-6_1f487-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-haircut_1f487-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-haircut-type-1-2_1f487-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-haircut-type-3_1f487-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-haircut-type-4_1f487-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-haircut-type-5_1f487-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-getting-haircut-type-6_1f487-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pedestrian_1f6b6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pedestrian_emoji-modifier-fitzpatrick-type-1-2_1f6b6-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pedestrian_emoji-modifier-fitzpatrick-type-3_1f6b6-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pedestrian_emoji-modifier-fitzpatrick-type-4_1f6b6-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pedestrian_emoji-modifier-fitzpatrick-type-5_1f6b6-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pedestrian_emoji-modifier-fitzpatrick-type-6_1f6b6-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-walking_1f6b6-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-walking-type-1-2_1f6b6-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-walking-type-3_1f6b6-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-walking-type-4_1f6b6-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-walking-type-5_1f6b6-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-walking-type-6_1f6b6-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-walking_1f6b6-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-walking-type-1-2_1f6b6-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-walking-type-3_1f6b6-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-walking-type-4_1f6b6-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-walking-type-5_1f6b6-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-walking-type-6_1f6b6-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/runner_1f3c3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/runner_emoji-modifier-fitzpatrick-type-1-2_1f3c3-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/runner_emoji-modifier-fitzpatrick-type-3_1f3c3-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/runner_emoji-modifier-fitzpatrick-type-4_1f3c3-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/runner_emoji-modifier-fitzpatrick-type-5_1f3c3-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/runner_emoji-modifier-fitzpatrick-type-6_1f3c3-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-running_1f3c3-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-running-type-1-2_1f3c3-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-running-type-3_1f3c3-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-running-type-4_1f3c3-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-running-type-5_1f3c3-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-running-type-6_1f3c3-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-running_1f3c3-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-running-type-1-2_1f3c3-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-running-type-3_1f3c3-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-running-type-4_1f3c3-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-running-type-5_1f3c3-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-running-type-6_1f3c3-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dancer_1f483.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dancer_emoji-modifier-fitzpatrick-type-1-2_1f483-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dancer_emoji-modifier-fitzpatrick-type-3_1f483-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dancer_emoji-modifier-fitzpatrick-type-4_1f483-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dancer_emoji-modifier-fitzpatrick-type-5_1f483-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dancer_emoji-modifier-fitzpatrick-type-6_1f483-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-dancing_1f57a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-dancing_emoji-modifier-fitzpatrick-type-1-2_1f57a-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-dancing_emoji-modifier-fitzpatrick-type-3_1f57a-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-dancing_emoji-modifier-fitzpatrick-type-4_1f57a-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-dancing_emoji-modifier-fitzpatrick-type-5_1f57a-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-dancing_emoji-modifier-fitzpatrick-type-6_1f57a-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-with-bunny-ears_1f46f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/men-with-bunny-ears-partying_1f46f-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/women-with-bunny-ears-partying_1f46f-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-steamy-room_1f9d6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-steamy-room_emoji-modifier-fitzpatrick-type-1-2_1f9d6-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-steamy-room_emoji-modifier-fitzpatrick-type-3_1f9d6-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-steamy-room_emoji-modifier-fitzpatrick-type-4_1f9d6-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-steamy-room_emoji-modifier-fitzpatrick-type-5_1f9d6-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-steamy-room_emoji-modifier-fitzpatrick-type-6_1f9d6-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-steamy-room_1f9d6-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-steamy-room-light-skin-tone_1f9d6-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-steamy-room-medium-light-skin-tone_1f9d6-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-steamy-room-medium-skin-tone_1f9d6-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-steamy-room-medium-dark-skin-tone_1f9d6-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-steamy-room-dark-skin-tone_1f9d6-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-steamy-room_1f9d6-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-steamy-room-light-skin-tone_1f9d6-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-steamy-room-medium-light-skin-tone_1f9d6-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-steamy-room-medium-skin-tone_1f9d6-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-steamy-room-medium-dark-skin-tone_1f9d6-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-steamy-room-dark-skin-tone_1f9d6-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-climbing_1f9d7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-climbing_emoji-modifier-fitzpatrick-type-1-2_1f9d7-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-climbing_emoji-modifier-fitzpatrick-type-3_1f9d7-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-climbing_emoji-modifier-fitzpatrick-type-4_1f9d7-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-climbing_emoji-modifier-fitzpatrick-type-5_1f9d7-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-climbing_emoji-modifier-fitzpatrick-type-6_1f9d7-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-climbing_1f9d7-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-climbing-light-skin-tone_1f9d7-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-climbing-medium-light-skin-tone_1f9d7-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-climbing-medium-skin-tone_1f9d7-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-climbing-medium-dark-skin-tone_1f9d7-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-climbing-dark-skin-tone_1f9d7-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-climbing_1f9d7-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-climbing-light-skin-tone_1f9d7-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-climbing-medium-light-skin-tone_1f9d7-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-climbing-medium-skin-tone_1f9d7-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-climbing-medium-dark-skin-tone_1f9d7-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-climbing-dark-skin-tone_1f9d7-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-lotus-position_1f9d8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-lotus-position_emoji-modifier-fitzpatrick-type-1-2_1f9d8-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-lotus-position_emoji-modifier-fitzpatrick-type-3_1f9d8-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-lotus-position_emoji-modifier-fitzpatrick-type-4_1f9d8-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-lotus-position_emoji-modifier-fitzpatrick-type-5_1f9d8-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-in-lotus-position_emoji-modifier-fitzpatrick-type-6_1f9d8-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-lotus-position_1f9d8-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-lotus-position-light-skin-tone_1f9d8-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-lotus-position-medium-light-skin-tone_1f9d8-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-lotus-position-medium-skin-tone_1f9d8-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-lotus-position-medium-dark-skin-tone_1f9d8-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-in-lotus-position-dark-skin-tone_1f9d8-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-lotus-position_1f9d8-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-lotus-position-light-skin-tone_1f9d8-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-lotus-position-medium-light-skin-tone_1f9d8-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-lotus-position-medium-skin-tone_1f9d8-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-lotus-position-medium-dark-skin-tone_1f9d8-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-lotus-position-dark-skin-tone_1f9d8-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bath_1f6c0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bath_emoji-modifier-fitzpatrick-type-1-2_1f6c0-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bath_emoji-modifier-fitzpatrick-type-3_1f6c0-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bath_emoji-modifier-fitzpatrick-type-4_1f6c0-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bath_emoji-modifier-fitzpatrick-type-5_1f6c0-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bath_emoji-modifier-fitzpatrick-type-6_1f6c0-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sleeping-accommodation_1f6cc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-business-suit-levitating_1f574.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-business-suit-levitating_emoji-modifier-fitzpatrick-type-1-2_1f574-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-business-suit-levitating_emoji-modifier-fitzpatrick-type-3_1f574-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-business-suit-levitating_emoji-modifier-fitzpatrick-type-4_1f574-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-business-suit-levitating_emoji-modifier-fitzpatrick-type-5_1f574-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-in-business-suit-levitating_emoji-modifier-fitzpatrick-type-6_1f574-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/speaking-head-in-silhouette_1f5e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bust-in-silhouette_1f464.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/busts-in-silhouette_1f465.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fencer_1f93a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/horse-racing_1f3c7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/horse-racing_emoji-modifier-fitzpatrick-type-1-2_1f3c7-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/horse-racing_emoji-modifier-fitzpatrick-type-3_1f3c7-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/horse-racing_emoji-modifier-fitzpatrick-type-4_1f3c7-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/horse-racing_emoji-modifier-fitzpatrick-type-5_1f3c7-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/horse-racing_emoji-modifier-fitzpatrick-type-6_1f3c7-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/skier_26f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/snowboarder_1f3c2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/golfer_1f3cc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/golfer_emoji-modifier-fitzpatrick-type-1-2_1f3cc-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/golfer_emoji-modifier-fitzpatrick-type-3_1f3cc-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/golfer_emoji-modifier-fitzpatrick-type-4_1f3cc-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/golfer_emoji-modifier-fitzpatrick-type-5_1f3cc-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/golfer_emoji-modifier-fitzpatrick-type-6_1f3cc-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-golfing_1f3cc-fe0f-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-golfing-type-1-2_1f3cc-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-golfing-type-3_1f3cc-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-golfing-type-4_1f3cc-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-golfing-type-5_1f3cc-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-golfing-type-6_1f3cc-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-golfing_1f3cc-fe0f-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-golfing-type-1-2_1f3cc-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-golfing-type-3_1f3cc-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-golfing-type-4_1f3cc-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-golfing-type-5_1f3cc-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-golfing-type-6_1f3cc-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/surfer_1f3c4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/surfer_emoji-modifier-fitzpatrick-type-1-2_1f3c4-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/surfer_emoji-modifier-fitzpatrick-type-3_1f3c4-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/surfer_emoji-modifier-fitzpatrick-type-4_1f3c4-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/surfer_emoji-modifier-fitzpatrick-type-5_1f3c4-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/surfer_emoji-modifier-fitzpatrick-type-6_1f3c4-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-surfing_1f3c4-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-surfing-type-1-2_1f3c4-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-surfing-type-3_1f3c4-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-surfing-type-4_1f3c4-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-surfing-type-5_1f3c4-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-surfing-type-6_1f3c4-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-surfing_1f3c4-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-surfing-type-1-2_1f3c4-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-surfing-type-3_1f3c4-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-surfing-type-4_1f3c4-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-surfing-type-5_1f3c4-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-surfing-type-6_1f3c4-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rowboat_1f6a3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rowboat_emoji-modifier-fitzpatrick-type-1-2_1f6a3-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rowboat_emoji-modifier-fitzpatrick-type-3_1f6a3-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rowboat_emoji-modifier-fitzpatrick-type-4_1f6a3-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rowboat_emoji-modifier-fitzpatrick-type-5_1f6a3-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rowboat_emoji-modifier-fitzpatrick-type-6_1f6a3-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-rowing-boat_1f6a3-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-rowing-boat-type-1-2_1f6a3-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-rowing-boat-type-3_1f6a3-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-rowing-boat-type-4_1f6a3-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-rowing-boat-type-5_1f6a3-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-rowing-boat-type-6_1f6a3-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-rowing-boat_1f6a3-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-rowing-boat-type-1-2_1f6a3-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-rowing-boat-type-3_1f6a3-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-rowing-boat-type-4_1f6a3-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-rowing-boat-type-5_1f6a3-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-rowing-boat-type-6_1f6a3-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/swimmer_1f3ca.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/swimmer_emoji-modifier-fitzpatrick-type-1-2_1f3ca-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/swimmer_emoji-modifier-fitzpatrick-type-3_1f3ca-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/swimmer_emoji-modifier-fitzpatrick-type-4_1f3ca-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/swimmer_emoji-modifier-fitzpatrick-type-5_1f3ca-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/swimmer_emoji-modifier-fitzpatrick-type-6_1f3ca-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-swimming_1f3ca-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-swimming-type-1-2_1f3ca-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-swimming-type-3_1f3ca-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-swimming-type-4_1f3ca-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-swimming-type-5_1f3ca-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-swimming-type-6_1f3ca-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-swimming_1f3ca-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-swimming-type-1-2_1f3ca-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-swimming-type-3_1f3ca-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-swimming-type-4_1f3ca-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-swimming-type-5_1f3ca-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-swimming-type-6_1f3ca-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-ball_26f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-ball_emoji-modifier-fitzpatrick-type-1-2_26f9-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-ball_emoji-modifier-fitzpatrick-type-3_26f9-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-ball_emoji-modifier-fitzpatrick-type-4_26f9-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-ball_emoji-modifier-fitzpatrick-type-5_26f9-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-ball_emoji-modifier-fitzpatrick-type-6_26f9-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-ball_26f9-fe0f-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-ball-type-1-2_26f9-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-ball-type-3_26f9-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-ball-type-4_26f9-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-ball-type-5_26f9-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-with-ball-type-6_26f9-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-with-ball_26f9-fe0f-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-with-ball-type-1-2_26f9-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-with-ball-type-3_26f9-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-with-ball-type-4_26f9-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-with-ball-type-5_26f9-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-with-ball-type-6_26f9-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/weight-lifter_1f3cb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/weight-lifter_emoji-modifier-fitzpatrick-type-1-2_1f3cb-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/weight-lifter_emoji-modifier-fitzpatrick-type-3_1f3cb-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/weight-lifter_emoji-modifier-fitzpatrick-type-4_1f3cb-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/weight-lifter_emoji-modifier-fitzpatrick-type-5_1f3cb-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/weight-lifter_emoji-modifier-fitzpatrick-type-6_1f3cb-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-weight-lifting_1f3cb-fe0f-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-weight-lifting-type-1-2_1f3cb-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-weight-lifting-type-3_1f3cb-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-weight-lifting-type-4_1f3cb-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-weight-lifting-type-5_1f3cb-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-weight-lifting-type-6_1f3cb-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-weight-lifting_1f3cb-fe0f-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-weight-lifting-type-1-2_1f3cb-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-weight-lifting-type-3_1f3cb-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-weight-lifting-type-4_1f3cb-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-weight-lifting-type-5_1f3cb-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-weight-lifting-type-6_1f3cb-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bicyclist_1f6b4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bicyclist_emoji-modifier-fitzpatrick-type-1-2_1f6b4-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bicyclist_emoji-modifier-fitzpatrick-type-3_1f6b4-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bicyclist_emoji-modifier-fitzpatrick-type-4_1f6b4-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bicyclist_emoji-modifier-fitzpatrick-type-5_1f6b4-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bicyclist_emoji-modifier-fitzpatrick-type-6_1f6b4-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-biking_1f6b4-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-biking-type-1-2_1f6b4-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-biking-type-3_1f6b4-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-biking-type-4_1f6b4-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-biking-type-5_1f6b4-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-biking-type-6_1f6b4-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-biking_1f6b4-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-biking-type-1-2_1f6b4-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-biking-type-3_1f6b4-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-biking-type-4_1f6b4-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-biking-type-5_1f6b4-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-biking-type-6_1f6b4-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mountain-bicyclist_1f6b5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mountain-bicyclist_emoji-modifier-fitzpatrick-type-1-2_1f6b5-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mountain-bicyclist_emoji-modifier-fitzpatrick-type-3_1f6b5-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mountain-bicyclist_emoji-modifier-fitzpatrick-type-4_1f6b5-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mountain-bicyclist_emoji-modifier-fitzpatrick-type-5_1f6b5-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mountain-bicyclist_emoji-modifier-fitzpatrick-type-6_1f6b5-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mountain-biking_1f6b5-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mountain-biking-type-1-2_1f6b5-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mountain-biking-type-3_1f6b5-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mountain-biking-type-4_1f6b5-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mountain-biking-type-5_1f6b5-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-mountain-biking-type-6_1f6b5-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mountain-biking_1f6b5-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mountain-biking-type-1-2_1f6b5-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mountain-biking-type-3_1f6b5-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mountain-biking-type-4_1f6b5-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mountain-biking-type-5_1f6b5-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-mountain-biking-type-6_1f6b5-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/racing-car_1f3ce.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/racing-motorcycle_1f3cd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-doing-cartwheel_1f938.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-doing-cartwheel_emoji-modifier-fitzpatrick-type-1-2_1f938-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-doing-cartwheel_emoji-modifier-fitzpatrick-type-3_1f938-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-doing-cartwheel_emoji-modifier-fitzpatrick-type-4_1f938-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-doing-cartwheel_emoji-modifier-fitzpatrick-type-5_1f938-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-doing-cartwheel_emoji-modifier-fitzpatrick-type-6_1f938-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-doing-cartwheel_1f938-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-doing-cartwheel-type-1-2_1f938-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-doing-cartwheel-type-3_1f938-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-doing-cartwheel-type-4_1f938-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-doing-cartwheel-type-5_1f938-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-doing-cartwheel-type-6_1f938-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-doing-cartwheel_1f938-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-doing-cartwheel-type-1-2_1f938-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-doing-cartwheel-type-3_1f938-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-doing-cartwheel-type-4_1f938-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-doing-cartwheel-type-5_1f938-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-doing-cartwheel-type-6_1f938-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wrestlers_1f93c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/men-wrestling_1f93c-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/women-wrestling_1f93c-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/water-polo_1f93d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/water-polo_emoji-modifier-fitzpatrick-type-1-2_1f93d-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/water-polo_emoji-modifier-fitzpatrick-type-3_1f93d-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/water-polo_emoji-modifier-fitzpatrick-type-4_1f93d-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/water-polo_emoji-modifier-fitzpatrick-type-5_1f93d-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/water-polo_emoji-modifier-fitzpatrick-type-6_1f93d-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-water-polo_1f93d-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-water-polo-type-1-2_1f93d-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-water-polo-type-3_1f93d-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-water-polo-type-4_1f93d-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-water-polo-type-5_1f93d-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-water-polo-type-6_1f93d-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-water-polo_1f93d-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-water-polo-type-1-2_1f93d-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-water-polo-type-3_1f93d-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-water-polo-type-4_1f93d-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-water-polo-type-5_1f93d-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-water-polo-type-6_1f93d-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/handball_1f93e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/handball_emoji-modifier-fitzpatrick-type-1-2_1f93e-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/handball_emoji-modifier-fitzpatrick-type-3_1f93e-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/handball_emoji-modifier-fitzpatrick-type-4_1f93e-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/handball_emoji-modifier-fitzpatrick-type-5_1f93e-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/handball_emoji-modifier-fitzpatrick-type-6_1f93e-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-handball_1f93e-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-handball-type-1-2_1f93e-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-handball-type-3_1f93e-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-handball-type-4_1f93e-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-handball-type-5_1f93e-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-playing-handball-type-6_1f93e-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-handball_1f93e-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-handball-type-1-2_1f93e-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-handball-type-3_1f93e-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-handball-type-4_1f93e-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-handball-type-5_1f93e-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-playing-handball-type-6_1f93e-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/juggling_1f939.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/juggling_emoji-modifier-fitzpatrick-type-1-2_1f939-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/juggling_emoji-modifier-fitzpatrick-type-3_1f939-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/juggling_emoji-modifier-fitzpatrick-type-4_1f939-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/juggling_emoji-modifier-fitzpatrick-type-5_1f939-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/juggling_emoji-modifier-fitzpatrick-type-6_1f939-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-juggling_1f939-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-juggling-type-1-2_1f939-1f3fb-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-juggling-type-3_1f939-1f3fc-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-juggling-type-4_1f939-1f3fd-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-juggling-type-5_1f939-1f3fe-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-juggling-type-6_1f939-1f3ff-200d-2642-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-juggling_1f939-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-juggling-type-1-2_1f939-1f3fb-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-juggling-type-3_1f939-1f3fc-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-juggling-type-4_1f939-1f3fd-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-juggling-type-5_1f939-1f3fe-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/woman-juggling-type-6_1f939-1f3ff-200d-2640-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/man-and-woman-holding-hands_1f46b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/two-men-holding-hands_1f46c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/two-women-holding-hands_1f46d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kiss_1f48f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kiss-woman-man_1f469-200d-2764-fe0f-200d-1f48b-200d-1f468.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kiss-man-man_1f468-200d-2764-fe0f-200d-1f48b-200d-1f468.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kiss-woman-woman_1f469-200d-2764-fe0f-200d-1f48b-200d-1f469.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/couple-with-heart_1f491.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/couple-with-heart-woman-man_1f469-200d-2764-fe0f-200d-1f468.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/couple-with-heart-man-man_1f468-200d-2764-fe0f-200d-1f468.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/couple-with-heart-woman-woman_1f469-200d-2764-fe0f-200d-1f469.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family_1f46a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-woman-boy_1f468-200d-1f469-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-woman-girl_1f468-200d-1f469-200d-1f467.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-woman-girl-boy_1f468-200d-1f469-200d-1f467-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-woman-boy-boy_1f468-200d-1f469-200d-1f466-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-woman-girl-girl_1f468-200d-1f469-200d-1f467-200d-1f467.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-man-boy_1f468-200d-1f468-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-man-girl_1f468-200d-1f468-200d-1f467.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-man-girl-boy_1f468-200d-1f468-200d-1f467-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-man-boy-boy_1f468-200d-1f468-200d-1f466-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-man-girl-girl_1f468-200d-1f468-200d-1f467-200d-1f467.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-woman-woman-boy_1f469-200d-1f469-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-woman-woman-girl_1f469-200d-1f469-200d-1f467.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-woman-woman-girl-boy_1f469-200d-1f469-200d-1f467-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-woman-woman-boy-boy_1f469-200d-1f469-200d-1f466-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-woman-woman-girl-girl_1f469-200d-1f469-200d-1f467-200d-1f467.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-boy_1f468-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-boy-boy_1f468-200d-1f466-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-girl_1f468-200d-1f467.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-girl-boy_1f468-200d-1f467-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-man-girl-girl_1f468-200d-1f467-200d-1f467.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-woman-boy_1f469-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-woman-boy-boy_1f469-200d-1f466-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-woman-girl_1f469-200d-1f467.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-woman-girl-boy_1f469-200d-1f467-200d-1f466.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/family-woman-girl-girl_1f469-200d-1f467-200d-1f467.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/selfie_1f933.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/selfie_emoji-modifier-fitzpatrick-type-1-2_1f933-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/selfie_emoji-modifier-fitzpatrick-type-3_1f933-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/selfie_emoji-modifier-fitzpatrick-type-4_1f933-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/selfie_emoji-modifier-fitzpatrick-type-5_1f933-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/selfie_emoji-modifier-fitzpatrick-type-6_1f933-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flexed-biceps_1f4aa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flexed-biceps_emoji-modifier-fitzpatrick-type-1-2_1f4aa-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flexed-biceps_emoji-modifier-fitzpatrick-type-3_1f4aa-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flexed-biceps_emoji-modifier-fitzpatrick-type-4_1f4aa-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flexed-biceps_emoji-modifier-fitzpatrick-type-5_1f4aa-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flexed-biceps_emoji-modifier-fitzpatrick-type-6_1f4aa-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-left-pointing-backhand-index_1f448.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-left-pointing-backhand-index_emoji-modifier-fitzpatrick-type-1-2_1f448-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-left-pointing-backhand-index_emoji-modifier-fitzpatrick-type-3_1f448-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-left-pointing-backhand-index_emoji-modifier-fitzpatrick-type-4_1f448-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-left-pointing-backhand-index_emoji-modifier-fitzpatrick-type-5_1f448-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-left-pointing-backhand-index_emoji-modifier-fitzpatrick-type-6_1f448-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-right-pointing-backhand-index_1f449.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-right-pointing-backhand-index_emoji-modifier-fitzpatrick-type-1-2_1f449-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-right-pointing-backhand-index_emoji-modifier-fitzpatrick-type-3_1f449-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-right-pointing-backhand-index_emoji-modifier-fitzpatrick-type-4_1f449-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-right-pointing-backhand-index_emoji-modifier-fitzpatrick-type-5_1f449-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-right-pointing-backhand-index_emoji-modifier-fitzpatrick-type-6_1f449-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-index_261d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-index_emoji-modifier-fitzpatrick-type-1-2_261d-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-index_emoji-modifier-fitzpatrick-type-3_261d-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-index_emoji-modifier-fitzpatrick-type-4_261d-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-index_emoji-modifier-fitzpatrick-type-5_261d-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-index_emoji-modifier-fitzpatrick-type-6_261d-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-backhand-index_1f446.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-backhand-index_emoji-modifier-fitzpatrick-type-1-2_1f446-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-backhand-index_emoji-modifier-fitzpatrick-type-3_1f446-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-backhand-index_emoji-modifier-fitzpatrick-type-4_1f446-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-backhand-index_emoji-modifier-fitzpatrick-type-5_1f446-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-up-pointing-backhand-index_emoji-modifier-fitzpatrick-type-6_1f446-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/reversed-hand-with-middle-finger-extended_1f595.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/reversed-hand-with-middle-finger-extended_emoji-modifier-fitzpatrick-type-1-2_1f595-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/reversed-hand-with-middle-finger-extended_emoji-modifier-fitzpatrick-type-3_1f595-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/reversed-hand-with-middle-finger-extended_emoji-modifier-fitzpatrick-type-4_1f595-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/reversed-hand-with-middle-finger-extended_emoji-modifier-fitzpatrick-type-5_1f595-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/reversed-hand-with-middle-finger-extended_emoji-modifier-fitzpatrick-type-6_1f595-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-down-pointing-backhand-index_1f447.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-down-pointing-backhand-index_emoji-modifier-fitzpatrick-type-1-2_1f447-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-down-pointing-backhand-index_emoji-modifier-fitzpatrick-type-3_1f447-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-down-pointing-backhand-index_emoji-modifier-fitzpatrick-type-4_1f447-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-down-pointing-backhand-index_emoji-modifier-fitzpatrick-type-5_1f447-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-down-pointing-backhand-index_emoji-modifier-fitzpatrick-type-6_1f447-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/victory-hand_270c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/victory-hand_emoji-modifier-fitzpatrick-type-1-2_270c-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/victory-hand_emoji-modifier-fitzpatrick-type-3_270c-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/victory-hand_emoji-modifier-fitzpatrick-type-4_270c-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/victory-hand_emoji-modifier-fitzpatrick-type-5_270c-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/victory-hand_emoji-modifier-fitzpatrick-type-6_270c-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hand-with-index-and-middle-fingers-crossed_1f91e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hand-with-index-and-middle-fingers-crossed_emoji-modifier-fitzpatrick-type-1-2_1f91e-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hand-with-index-and-middle-fingers-crossed_emoji-modifier-fitzpatrick-type-3_1f91e-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hand-with-index-and-middle-fingers-crossed_emoji-modifier-fitzpatrick-type-4_1f91e-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hand-with-index-and-middle-fingers-crossed_emoji-modifier-fitzpatrick-type-5_1f91e-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hand-with-index-and-middle-fingers-crossed_emoji-modifier-fitzpatrick-type-6_1f91e-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-part-between-middle-and-ring-fingers_1f596.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-part-between-middle-and-ring-fingers_emoji-modifier-fitzpatrick-type-1-2_1f596-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-part-between-middle-and-ring-fingers_emoji-modifier-fitzpatrick-type-3_1f596-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-part-between-middle-and-ring-fingers_emoji-modifier-fitzpatrick-type-4_1f596-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-part-between-middle-and-ring-fingers_emoji-modifier-fitzpatrick-type-5_1f596-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-part-between-middle-and-ring-fingers_emoji-modifier-fitzpatrick-type-6_1f596-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sign-of-the-horns_1f918.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sign-of-the-horns_emoji-modifier-fitzpatrick-type-1-2_1f918-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sign-of-the-horns_emoji-modifier-fitzpatrick-type-3_1f918-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sign-of-the-horns_emoji-modifier-fitzpatrick-type-4_1f918-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sign-of-the-horns_emoji-modifier-fitzpatrick-type-5_1f918-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sign-of-the-horns_emoji-modifier-fitzpatrick-type-6_1f918-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/call-me-hand_1f919.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/call-me-hand_emoji-modifier-fitzpatrick-type-1-2_1f919-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/call-me-hand_emoji-modifier-fitzpatrick-type-3_1f919-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/call-me-hand_emoji-modifier-fitzpatrick-type-4_1f919-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/call-me-hand_emoji-modifier-fitzpatrick-type-5_1f919-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/call-me-hand_emoji-modifier-fitzpatrick-type-6_1f919-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-fingers-splayed_1f590.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-fingers-splayed_emoji-modifier-fitzpatrick-type-1-2_1f590-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-fingers-splayed_emoji-modifier-fitzpatrick-type-3_1f590-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-fingers-splayed_emoji-modifier-fitzpatrick-type-4_1f590-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-fingers-splayed_emoji-modifier-fitzpatrick-type-5_1f590-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand-with-fingers-splayed_emoji-modifier-fitzpatrick-type-6_1f590-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand_270b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand_emoji-modifier-fitzpatrick-type-1-2_270b-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand_emoji-modifier-fitzpatrick-type-3_270b-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand_emoji-modifier-fitzpatrick-type-4_270b-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand_emoji-modifier-fitzpatrick-type-5_270b-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-hand_emoji-modifier-fitzpatrick-type-6_270b-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ok-hand-sign_1f44c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ok-hand-sign_emoji-modifier-fitzpatrick-type-1-2_1f44c-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ok-hand-sign_emoji-modifier-fitzpatrick-type-3_1f44c-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ok-hand-sign_emoji-modifier-fitzpatrick-type-4_1f44c-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ok-hand-sign_emoji-modifier-fitzpatrick-type-5_1f44c-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ok-hand-sign_emoji-modifier-fitzpatrick-type-6_1f44c-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-up-sign_1f44d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-up-sign_emoji-modifier-fitzpatrick-type-1-2_1f44d-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-up-sign_emoji-modifier-fitzpatrick-type-3_1f44d-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-up-sign_emoji-modifier-fitzpatrick-type-4_1f44d-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-up-sign_emoji-modifier-fitzpatrick-type-5_1f44d-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-up-sign_emoji-modifier-fitzpatrick-type-6_1f44d-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-down-sign_1f44e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-down-sign_emoji-modifier-fitzpatrick-type-1-2_1f44e-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-down-sign_emoji-modifier-fitzpatrick-type-3_1f44e-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-down-sign_emoji-modifier-fitzpatrick-type-4_1f44e-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-down-sign_emoji-modifier-fitzpatrick-type-5_1f44e-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thumbs-down-sign_emoji-modifier-fitzpatrick-type-6_1f44e-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-fist_270a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-fist_emoji-modifier-fitzpatrick-type-1-2_270a-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-fist_emoji-modifier-fitzpatrick-type-3_270a-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-fist_emoji-modifier-fitzpatrick-type-4_270a-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-fist_emoji-modifier-fitzpatrick-type-5_270a-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-fist_emoji-modifier-fitzpatrick-type-6_270a-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fisted-hand-sign_1f44a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fisted-hand-sign_emoji-modifier-fitzpatrick-type-1-2_1f44a-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fisted-hand-sign_emoji-modifier-fitzpatrick-type-3_1f44a-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fisted-hand-sign_emoji-modifier-fitzpatrick-type-4_1f44a-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fisted-hand-sign_emoji-modifier-fitzpatrick-type-5_1f44a-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fisted-hand-sign_emoji-modifier-fitzpatrick-type-6_1f44a-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/left-facing-fist_1f91b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/left-facing-fist_emoji-modifier-fitzpatrick-type-1-2_1f91b-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/left-facing-fist_emoji-modifier-fitzpatrick-type-3_1f91b-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/left-facing-fist_emoji-modifier-fitzpatrick-type-4_1f91b-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/left-facing-fist_emoji-modifier-fitzpatrick-type-5_1f91b-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/left-facing-fist_emoji-modifier-fitzpatrick-type-6_1f91b-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/right-facing-fist_1f91c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/right-facing-fist_emoji-modifier-fitzpatrick-type-1-2_1f91c-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/right-facing-fist_emoji-modifier-fitzpatrick-type-3_1f91c-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/right-facing-fist_emoji-modifier-fitzpatrick-type-4_1f91c-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/right-facing-fist_emoji-modifier-fitzpatrick-type-5_1f91c-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/right-facing-fist_emoji-modifier-fitzpatrick-type-6_1f91c-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-back-of-hand_1f91a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-back-of-hand_emoji-modifier-fitzpatrick-type-1-2_1f91a-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-back-of-hand_emoji-modifier-fitzpatrick-type-3_1f91a-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-back-of-hand_emoji-modifier-fitzpatrick-type-4_1f91a-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-back-of-hand_emoji-modifier-fitzpatrick-type-5_1f91a-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/raised-back-of-hand_emoji-modifier-fitzpatrick-type-6_1f91a-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waving-hand-sign_1f44b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waving-hand-sign_emoji-modifier-fitzpatrick-type-1-2_1f44b-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waving-hand-sign_emoji-modifier-fitzpatrick-type-3_1f44b-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waving-hand-sign_emoji-modifier-fitzpatrick-type-4_1f44b-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waving-hand-sign_emoji-modifier-fitzpatrick-type-5_1f44b-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waving-hand-sign_emoji-modifier-fitzpatrick-type-6_1f44b-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/i-love-you-hand-sign_1f91f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/i-love-you-hand-sign_emoji-modifier-fitzpatrick-type-1-2_1f91f-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/i-love-you-hand-sign_emoji-modifier-fitzpatrick-type-3_1f91f-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/i-love-you-hand-sign_emoji-modifier-fitzpatrick-type-4_1f91f-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/i-love-you-hand-sign_emoji-modifier-fitzpatrick-type-5_1f91f-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/i-love-you-hand-sign_emoji-modifier-fitzpatrick-type-6_1f91f-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/writing-hand_270d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/writing-hand_emoji-modifier-fitzpatrick-type-1-2_270d-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/writing-hand_emoji-modifier-fitzpatrick-type-3_270d-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/writing-hand_emoji-modifier-fitzpatrick-type-4_270d-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/writing-hand_emoji-modifier-fitzpatrick-type-5_270d-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/writing-hand_emoji-modifier-fitzpatrick-type-6_270d-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clapping-hands-sign_1f44f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clapping-hands-sign_emoji-modifier-fitzpatrick-type-1-2_1f44f-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clapping-hands-sign_emoji-modifier-fitzpatrick-type-3_1f44f-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clapping-hands-sign_emoji-modifier-fitzpatrick-type-4_1f44f-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clapping-hands-sign_emoji-modifier-fitzpatrick-type-5_1f44f-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clapping-hands-sign_emoji-modifier-fitzpatrick-type-6_1f44f-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/open-hands-sign_1f450.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/open-hands-sign_emoji-modifier-fitzpatrick-type-1-2_1f450-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/open-hands-sign_emoji-modifier-fitzpatrick-type-3_1f450-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/open-hands-sign_emoji-modifier-fitzpatrick-type-4_1f450-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/open-hands-sign_emoji-modifier-fitzpatrick-type-5_1f450-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/open-hands-sign_emoji-modifier-fitzpatrick-type-6_1f450-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-raising-both-hands-in-celebration_1f64c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-raising-both-hands-in-celebration_emoji-modifier-fitzpatrick-type-1-2_1f64c-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-raising-both-hands-in-celebration_emoji-modifier-fitzpatrick-type-3_1f64c-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-raising-both-hands-in-celebration_emoji-modifier-fitzpatrick-type-4_1f64c-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-raising-both-hands-in-celebration_emoji-modifier-fitzpatrick-type-5_1f64c-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-raising-both-hands-in-celebration_emoji-modifier-fitzpatrick-type-6_1f64c-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/palms-up-together_1f932.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/palms-up-together_emoji-modifier-fitzpatrick-type-1-2_1f932-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/palms-up-together_emoji-modifier-fitzpatrick-type-3_1f932-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/palms-up-together_emoji-modifier-fitzpatrick-type-4_1f932-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/palms-up-together_emoji-modifier-fitzpatrick-type-5_1f932-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/palms-up-together_emoji-modifier-fitzpatrick-type-6_1f932-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-folded-hands_1f64f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-folded-hands_emoji-modifier-fitzpatrick-type-1-2_1f64f-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-folded-hands_emoji-modifier-fitzpatrick-type-3_1f64f-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-folded-hands_emoji-modifier-fitzpatrick-type-4_1f64f-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-folded-hands_emoji-modifier-fitzpatrick-type-5_1f64f-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/person-with-folded-hands_emoji-modifier-fitzpatrick-type-6_1f64f-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/handshake_1f91d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nail-polish_1f485.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nail-polish_emoji-modifier-fitzpatrick-type-1-2_1f485-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nail-polish_emoji-modifier-fitzpatrick-type-3_1f485-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nail-polish_emoji-modifier-fitzpatrick-type-4_1f485-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nail-polish_emoji-modifier-fitzpatrick-type-5_1f485-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nail-polish_emoji-modifier-fitzpatrick-type-6_1f485-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ear_1f442.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ear_emoji-modifier-fitzpatrick-type-1-2_1f442-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ear_emoji-modifier-fitzpatrick-type-3_1f442-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ear_emoji-modifier-fitzpatrick-type-4_1f442-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ear_emoji-modifier-fitzpatrick-type-5_1f442-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ear_emoji-modifier-fitzpatrick-type-6_1f442-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nose_1f443.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nose_emoji-modifier-fitzpatrick-type-1-2_1f443-1f3fb_1f3fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nose_emoji-modifier-fitzpatrick-type-3_1f443-1f3fc_1f3fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nose_emoji-modifier-fitzpatrick-type-4_1f443-1f3fd_1f3fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nose_emoji-modifier-fitzpatrick-type-5_1f443-1f3fe_1f3fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nose_emoji-modifier-fitzpatrick-type-6_1f443-1f3ff_1f3ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/footprints_1f463.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/eyes_1f440.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/eye_1f441.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/eye-in-speech-bubble_1f441-fe0f-200d-1f5e8-fe0f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/brain_1f9e0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tongue_1f445.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mouth_1f444.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kiss-mark_1f48b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heart-with-arrow_1f498.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heavy-black-heart_2764.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/beating-heart_1f493.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/broken-heart_1f494.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/two-hearts_1f495.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sparkling-heart_1f496.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/growing-heart_1f497.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blue-heart_1f499.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/green-heart_1f49a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/yellow-heart_1f49b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/orange-heart_1f9e1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/purple-heart_1f49c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-heart_1f5a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heart-with-ribbon_1f49d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/revolving-hearts_1f49e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heart-decoration_1f49f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heavy-heart-exclamation-mark-ornament_2763.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/love-letter_1f48c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sleeping-symbol_1f4a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/anger-symbol_1f4a2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bomb_1f4a3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/collision-symbol_1f4a5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/splashing-sweat-symbol_1f4a6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dash-symbol_1f4a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dizzy-symbol_1f4ab.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/speech-balloon_1f4ac.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/left-speech-bubble_1f5e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/right-anger-bubble_1f5ef.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thought-balloon_1f4ad.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hole_1f573.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/eyeglasses_1f453.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dark-sunglasses_1f576.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/necktie_1f454.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/t-shirt_1f455.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/jeans_1f456.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/scarf_1f9e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/gloves_1f9e4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/coat_1f9e5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/socks_1f9e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dress_1f457.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kimono_1f458.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bikini_1f459.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/womans-clothes_1f45a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/purse_1f45b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/handbag_1f45c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pouch_1f45d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shopping-bags_1f6cd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/school-satchel_1f392.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mans-shoe_1f45e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/athletic-shoe_1f45f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/high-heeled-shoe_1f460.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/womans-sandal_1f461.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/womans-boots_1f462.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/crown_1f451.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/womans-hat_1f452.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/top-hat_1f3a9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/graduation-cap_1f393.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/billed-cap_1f9e2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/helmet-with-white-cross_26d1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/prayer-beads_1f4ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lipstick_1f484.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ring_1f48d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/gem-stone_1f48e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/monkey-face_1f435.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/monkey_1f412.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/gorilla_1f98d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dog-face_1f436.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dog_1f415.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/poodle_1f429.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wolf-face_1f43a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fox-face_1f98a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cat-face_1f431.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cat_1f408.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lion-face_1f981.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tiger-face_1f42f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tiger_1f405.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/leopard_1f406.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/horse-face_1f434.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/horse_1f40e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/unicorn-face_1f984.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/zebra-face_1f993.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/deer_1f98c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cow-face_1f42e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ox_1f402.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/water-buffalo_1f403.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cow_1f404.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pig-face_1f437.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pig_1f416.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/boar_1f417.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pig-nose_1f43d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ram_1f40f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sheep_1f411.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/goat_1f410.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dromedary-camel_1f42a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bactrian-camel_1f42b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/giraffe-face_1f992.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/elephant_1f418.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rhinoceros_1f98f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mouse-face_1f42d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mouse_1f401.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rat_1f400.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hamster-face_1f439.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rabbit-face_1f430.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rabbit_1f407.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/chipmunk_1f43f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hedgehog_1f994.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bat_1f987.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bear-face_1f43b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/koala_1f428.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/panda-face_1f43c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/paw-prints_1f43e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/turkey_1f983.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/chicken_1f414.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rooster_1f413.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hatching-chick_1f423.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby-chick_1f424.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/front-facing-baby-chick_1f425.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bird_1f426.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/penguin_1f427.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dove-of-peace_1f54a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/eagle_1f985.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/duck_1f986.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/owl_1f989.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/frog-face_1f438.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/crocodile_1f40a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/turtle_1f422.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lizard_1f98e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/snake_1f40d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dragon-face_1f432.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dragon_1f409.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sauropod_1f995.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/t-rex_1f996.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/spouting-whale_1f433.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/whale_1f40b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dolphin_1f42c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fish_1f41f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tropical-fish_1f420.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blowfish_1f421.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shark_1f988.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/octopus_1f419.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/spiral-shell_1f41a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/crab_1f980.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shrimp_1f990.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squid_1f991.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/snail_1f40c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/butterfly_1f98b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bug_1f41b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ant_1f41c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/honeybee_1f41d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lady-beetle_1f41e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cricket_1f997.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/spider_1f577.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/spider-web_1f578.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/scorpion_1f982.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bouquet_1f490.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cherry-blossom_1f338.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-flower_1f4ae.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rosette_1f3f5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rose_1f339.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wilted-flower_1f940.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hibiscus_1f33a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sunflower_1f33b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blossom_1f33c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tulip_1f337.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/seedling_1f331.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/evergreen-tree_1f332.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/deciduous-tree_1f333.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/palm-tree_1f334.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cactus_1f335.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ear-of-rice_1f33e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/herb_1f33f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shamrock_2618.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/four-leaf-clover_1f340.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/maple-leaf_1f341.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fallen-leaf_1f342.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/leaf-fluttering-in-wind_1f343.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/grapes_1f347.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/melon_1f348.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/watermelon_1f349.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tangerine_1f34a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lemon_1f34b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/banana_1f34c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pineapple_1f34d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/red-apple_1f34e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/green-apple_1f34f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pear_1f350.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/peach_1f351.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cherries_1f352.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/strawberry_1f353.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kiwifruit_1f95d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tomato_1f345.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/coconut_1f965.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/avocado_1f951.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/aubergine_1f346.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/potato_1f954.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/carrot_1f955.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ear-of-maize_1f33d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hot-pepper_1f336.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cucumber_1f952.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/broccoli_1f966.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mushroom_1f344.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/peanuts_1f95c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/chestnut_1f330.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bread_1f35e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/croissant_1f950.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baguette-bread_1f956.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pretzel_1f968.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pancakes_1f95e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cheese-wedge_1f9c0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/meat-on-bone_1f356.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/poultry-leg_1f357.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cut-of-meat_1f969.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bacon_1f953.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hamburger_1f354.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/french-fries_1f35f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/slice-of-pizza_1f355.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hot-dog_1f32d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sandwich_1f96a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/taco_1f32e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/burrito_1f32f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/stuffed-flatbread_1f959.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/egg_1f95a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cooking_1f373.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shallow-pan-of-food_1f958.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pot-of-food_1f372.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bowl-with-spoon_1f963.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/green-salad_1f957.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/popcorn_1f37f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/canned-food_1f96b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bento-box_1f371.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rice-cracker_1f358.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rice-ball_1f359.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cooked-rice_1f35a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/curry-and-rice_1f35b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/steaming-bowl_1f35c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/spaghetti_1f35d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/roasted-sweet-potato_1f360.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/oden_1f362.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sushi_1f363.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fried-shrimp_1f364.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fish-cake-with-swirl-design_1f365.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dango_1f361.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dumpling_1f95f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fortune-cookie_1f960.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/takeout-box_1f961.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/soft-ice-cream_1f366.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shaved-ice_1f367.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ice-cream_1f368.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/doughnut_1f369.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cookie_1f36a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/birthday-cake_1f382.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shortcake_1f370.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pie_1f967.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/chocolate-bar_1f36b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/candy_1f36c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lollipop_1f36d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/custard_1f36e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/honey-pot_1f36f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby-bottle_1f37c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/glass-of-milk_1f95b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hot-beverage_2615.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/teacup-without-handle_1f375.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sake-bottle-and-cup_1f376.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bottle-with-popping-cork_1f37e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wine-glass_1f377.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cocktail-glass_1f378.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tropical-drink_1f379.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/beer-mug_1f37a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clinking-beer-mugs_1f37b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clinking-glasses_1f942.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tumbler-glass_1f943.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cup-with-straw_1f964.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/chopsticks_1f962.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fork-and-knife-with-plate_1f37d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fork-and-knife_1f374.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/spoon_1f944.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hocho_1f52a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/amphora_1f3fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/earth-globe-europe-africa_1f30d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/earth-globe-americas_1f30e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/earth-globe-asia-australia_1f30f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/globe-with-meridians_1f310.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/world-map_1f5fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/silhouette-of-japan_1f5fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/snow-capped-mountain_1f3d4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mountain_26f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/volcano_1f30b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mount-fuji_1f5fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/camping_1f3d5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/beach-with-umbrella_1f3d6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/desert_1f3dc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/desert-island_1f3dd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/national-park_1f3de.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/stadium_1f3df.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/classical-building_1f3db.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/building-construction_1f3d7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/house-buildings_1f3d8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cityscape_1f3d9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/derelict-house-building_1f3da.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/house-building_1f3e0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/house-with-garden_1f3e1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/office-building_1f3e2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/japanese-post-office_1f3e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/european-post-office_1f3e4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hospital_1f3e5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bank_1f3e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hotel_1f3e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/love-hotel_1f3e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/convenience-store_1f3ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/school_1f3eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/department-store_1f3ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/factory_1f3ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/japanese-castle_1f3ef.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/european-castle_1f3f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wedding_1f492.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tokyo-tower_1f5fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/statue-of-liberty_1f5fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/church_26ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mosque_1f54c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/synagogue_1f54d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shinto-shrine_26e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/kaaba_1f54b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fountain_26f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tent_26fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/foggy_1f301.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/night-with-stars_1f303.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sunrise-over-mountains_1f304.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sunrise_1f305.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cityscape-at-dusk_1f306.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sunset-over-buildings_1f307.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bridge-at-night_1f309.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hot-springs_2668.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/milky-way_1f30c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/carousel-horse_1f3a0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ferris-wheel_1f3a1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/roller-coaster_1f3a2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/barber-pole_1f488.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/circus-tent_1f3aa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/performing-arts_1f3ad.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/frame-with-picture_1f5bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/artist-palette_1f3a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/slot-machine_1f3b0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/steam-locomotive_1f682.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/railway-car_1f683.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/high-speed-train_1f684.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/high-speed-train-with-bullet-nose_1f685.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/train_1f686.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/metro_1f687.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/light-rail_1f688.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/station_1f689.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tram_1f68a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/monorail_1f69d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mountain-railway_1f69e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tram-car_1f68b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bus_1f68c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/oncoming-bus_1f68d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/trolleybus_1f68e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/minibus_1f690.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ambulance_1f691.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fire-engine_1f692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/police-car_1f693.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/oncoming-police-car_1f694.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/taxi_1f695.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/oncoming-taxi_1f696.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/automobile_1f697.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/oncoming-automobile_1f698.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/recreational-vehicle_1f699.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/delivery-truck_1f69a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/articulated-lorry_1f69b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tractor_1f69c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bicycle_1f6b2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/scooter_1f6f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/motor-scooter_1f6f5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bus-stop_1f68f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/motorway_1f6e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/railway-track_1f6e4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fuel-pump_26fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/police-cars-revolving-light_1f6a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/horizontal-traffic-light_1f6a5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/vertical-traffic-light_1f6a6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/construction-sign_1f6a7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/octagonal-sign_1f6d1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/anchor_2693.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sailboat_26f5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/canoe_1f6f6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/speedboat_1f6a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/passenger-ship_1f6f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ferry_26f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/motor-boat_1f6e5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ship_1f6a2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/airplane_2708.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/small-airplane_1f6e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/airplane-departure_1f6eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/airplane-arriving_1f6ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/seat_1f4ba.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/helicopter_1f681.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/suspension-railway_1f69f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mountain-cableway_1f6a0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/aerial-tramway_1f6a1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/satellite_1f6f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rocket_1f680.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flying-saucer_1f6f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bellhop-bell_1f6ce.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/door_1f6aa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bed_1f6cf.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/couch-and-lamp_1f6cb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/toilet_1f6bd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shower_1f6bf.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bathtub_1f6c1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hourglass_231b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hourglass-with-flowing-sand_23f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/watch_231a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/alarm-clock_23f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/stopwatch_23f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/timer-clock_23f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mantelpiece-clock_1f570.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-twelve-oclock_1f55b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-twelve-thirty_1f567.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-one-oclock_1f550.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-one-thirty_1f55c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-two-oclock_1f551.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-two-thirty_1f55d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-three-oclock_1f552.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-three-thirty_1f55e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-four-oclock_1f553.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-four-thirty_1f55f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-five-oclock_1f554.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-five-thirty_1f560.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-six-oclock_1f555.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-six-thirty_1f561.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-seven-oclock_1f556.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-seven-thirty_1f562.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-eight-oclock_1f557.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-eight-thirty_1f563.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-nine-oclock_1f558.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-nine-thirty_1f564.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-ten-oclock_1f559.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-ten-thirty_1f565.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-eleven-oclock_1f55a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clock-face-eleven-thirty_1f566.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/new-moon-symbol_1f311.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waxing-crescent-moon-symbol_1f312.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/first-quarter-moon-symbol_1f313.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waxing-gibbous-moon-symbol_1f314.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/full-moon-symbol_1f315.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waning-gibbous-moon-symbol_1f316.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/last-quarter-moon-symbol_1f317.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waning-crescent-moon-symbol_1f318.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/crescent-moon_1f319.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/new-moon-with-face_1f31a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/first-quarter-moon-with-face_1f31b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/last-quarter-moon-with-face_1f31c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thermometer_1f321.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-sun-with-rays_2600.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/full-moon-with-face_1f31d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sun-with-face_1f31e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-medium-star_2b50.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/glowing-star_1f31f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shooting-star_1f320.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cloud_2601.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sun-behind-cloud_26c5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/thunder-cloud-and-rain_26c8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-sun-with-small-cloud_1f324.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-sun-behind-cloud_1f325.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-sun-behind-cloud-with-rain_1f326.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cloud-with-rain_1f327.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cloud-with-snow_1f328.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cloud-with-lightning_1f329.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cloud-with-tornado_1f32a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fog_1f32b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wind-blowing-face_1f32c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cyclone_1f300.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rainbow_1f308.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/closed-umbrella_1f302.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/umbrella_2602.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/umbrella-with-rain-drops_2614.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/umbrella-on-ground_26f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/high-voltage-sign_26a1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/snowflake_2744.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/snowman_2603.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/snowman-without-snow_26c4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/comet_2604.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fire_1f525.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/droplet_1f4a7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/water-wave_1f30a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/jack-o-lantern_1f383.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/christmas-tree_1f384.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fireworks_1f386.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/firework-sparkler_1f387.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sparkles_2728.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/balloon_1f388.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/party-popper_1f389.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/confetti-ball_1f38a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tanabata-tree_1f38b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pine-decoration_1f38d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/japanese-dolls_1f38e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/carp-streamer_1f38f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wind-chime_1f390.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/moon-viewing-ceremony_1f391.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ribbon_1f380.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wrapped-present_1f381.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/reminder-ribbon_1f397.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/admission-tickets_1f39f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ticket_1f3ab.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/military-medal_1f396.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/trophy_1f3c6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sports-medal_1f3c5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/first-place-medal_1f947.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/second-place-medal_1f948.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/third-place-medal_1f949.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/soccer-ball_26bd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baseball_26be.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/basketball-and-hoop_1f3c0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/volleyball_1f3d0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/american-football_1f3c8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rugby-football_1f3c9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tennis-racquet-and-ball_1f3be.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/billiards_1f3b1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bowling_1f3b3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cricket-bat-and-ball_1f3cf.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/field-hockey-stick-and-ball_1f3d1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ice-hockey-stick-and-puck_1f3d2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/table-tennis-paddle-and-ball_1f3d3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/badminton-racquet-and-shuttlecock_1f3f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/boxing-glove_1f94a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/martial-arts-uniform_1f94b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/goal-net_1f945.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/direct-hit_1f3af.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-in-hole_26f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ice-skate_26f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fishing-pole-and-fish_1f3a3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/running-shirt-with-sash_1f3bd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ski-and-ski-boot_1f3bf.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sled_1f6f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/curling-stone_1f94c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/video-game_1f3ae.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/joystick_1f579.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/game-die_1f3b2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-spade-suit_2660.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-heart-suit_2665.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-diamond-suit_2666.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-club-suit_2663.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/playing-card-black-joker_1f0cf.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mahjong-tile-red-dragon_1f004.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flower-playing-cards_1f3b4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/speaker-with-cancellation-stroke_1f507.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/speaker_1f508.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/speaker-with-one-sound-wave_1f509.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/speaker-with-three-sound-waves_1f50a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/public-address-loudspeaker_1f4e2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cheering-megaphone_1f4e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/postal-horn_1f4ef.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bell_1f514.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bell-with-cancellation-stroke_1f515.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/musical-score_1f3bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/musical-note_1f3b5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/multiple-musical-notes_1f3b6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/studio-microphone_1f399.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/level-slider_1f39a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/control-knobs_1f39b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/microphone_1f3a4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/headphone_1f3a7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/radio_1f4fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/saxophone_1f3b7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/guitar_1f3b8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/musical-keyboard_1f3b9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/trumpet_1f3ba.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/violin_1f3bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/drum-with-drumsticks_1f941.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mobile-phone_1f4f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mobile-phone-with-rightwards-arrow-at-left_1f4f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-telephone_260e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/telephone-receiver_1f4de.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pager_1f4df.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fax-machine_1f4e0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/battery_1f50b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/electric-plug_1f50c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/personal-computer_1f4bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/desktop-computer_1f5a5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/printer_1f5a8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keyboard_2328.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/three-button-mouse_1f5b1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/trackball_1f5b2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/minidisc_1f4bd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/floppy-disk_1f4be.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/optical-disc_1f4bf.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dvd_1f4c0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/movie-camera_1f3a5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/film-frames_1f39e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/film-projector_1f4fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clapper-board_1f3ac.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/television_1f4fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/camera_1f4f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/camera-with-flash_1f4f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/video-camera_1f4f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/videocassette_1f4fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/left-pointing-magnifying-glass_1f50d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/right-pointing-magnifying-glass_1f50e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/microscope_1f52c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/telescope_1f52d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/satellite-antenna_1f4e1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/candle_1f56f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/electric-light-bulb_1f4a1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/electric-torch_1f526.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/izakaya-lantern_1f3ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/notebook-with-decorative-cover_1f4d4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/closed-book_1f4d5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/open-book_1f4d6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/green-book_1f4d7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/blue-book_1f4d8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/orange-book_1f4d9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/books_1f4da.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/notebook_1f4d3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ledger_1f4d2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/page-with-curl_1f4c3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/scroll_1f4dc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/page-facing-up_1f4c4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/newspaper_1f4f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rolled-up-newspaper_1f5de.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bookmark-tabs_1f4d1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bookmark_1f516.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/label_1f3f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/money-bag_1f4b0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/banknote-with-yen-sign_1f4b4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/banknote-with-dollar-sign_1f4b5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/banknote-with-euro-sign_1f4b6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/banknote-with-pound-sign_1f4b7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/money-with-wings_1f4b8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/credit-card_1f4b3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/chart-with-upwards-trend-and-yen-sign_1f4b9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/currency-exchange_1f4b1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heavy-dollar-sign_1f4b2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/envelope_2709.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/e-mail-symbol_1f4e7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/incoming-envelope_1f4e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/envelope-with-downwards-arrow-above_1f4e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/outbox-tray_1f4e4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/inbox-tray_1f4e5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/package_1f4e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/closed-mailbox-with-raised-flag_1f4eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/closed-mailbox-with-lowered-flag_1f4ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/open-mailbox-with-raised-flag_1f4ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/open-mailbox-with-lowered-flag_1f4ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/postbox_1f4ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ballot-box-with-ballot_1f5f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pencil_270f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-nib_2712.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lower-left-fountain-pen_1f58b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lower-left-ballpoint-pen_1f58a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lower-left-paintbrush_1f58c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lower-left-crayon_1f58d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/memo_1f4dd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/briefcase_1f4bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/file-folder_1f4c1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/open-file-folder_1f4c2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/card-index-dividers_1f5c2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/calendar_1f4c5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/tear-off-calendar_1f4c6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/spiral-note-pad_1f5d2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/spiral-calendar-pad_1f5d3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/card-index_1f4c7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/chart-with-upwards-trend_1f4c8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/chart-with-downwards-trend_1f4c9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bar-chart_1f4ca.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clipboard_1f4cb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pushpin_1f4cc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/round-pushpin_1f4cd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/paperclip_1f4ce.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/linked-paperclips_1f587.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/straight-ruler_1f4cf.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/triangular-ruler_1f4d0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-scissors_2702.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/card-file-box_1f5c3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/file-cabinet_1f5c4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wastebasket_1f5d1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lock_1f512.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/open-lock_1f513.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/lock-with-ink-pen_1f50f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/closed-lock-with-key_1f510.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/key_1f511.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/old-key_1f5dd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hammer_1f528.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pick_26cf.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hammer-and-pick_2692.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hammer-and-wrench_1f6e0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/dagger-knife_1f5e1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/crossed-swords_2694.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pistol_1f52b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/bow-and-arrow_1f3f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shield_1f6e1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wrench_1f527.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/nut-and-bolt_1f529.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/gear_2699.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/compression_1f5dc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/alembic_2697.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/scales_2696.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/link-symbol_1f517.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/chains_26d3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/syringe_1f489.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pill_1f48a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smoking-symbol_1f6ac.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/coffin_26b0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/funeral-urn_26b1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/moyai_1f5ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/oil-drum_1f6e2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/crystal-ball_1f52e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/shopping-trolley_1f6d2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/automated-teller-machine_1f3e7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/put-litter-in-its-place-symbol_1f6ae.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/potable-water-symbol_1f6b0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wheelchair-symbol_267f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mens-symbol_1f6b9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/womens-symbol_1f6ba.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/restroom_1f6bb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baby-symbol_1f6bc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/water-closet_1f6be.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/passport-control_1f6c2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/customs_1f6c3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/baggage-claim_1f6c4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/left-luggage_1f6c5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/warning-sign_26a0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/children-crossing_1f6b8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/no-entry_26d4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/no-entry-sign_1f6ab.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/no-bicycles_1f6b3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/no-smoking-symbol_1f6ad.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/do-not-litter-symbol_1f6af.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/non-potable-water-symbol_1f6b1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/no-pedestrians_1f6b7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/no-mobile-phones_1f4f5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/no-one-under-eighteen-symbol_1f51e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/radioactive-sign_2622.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/biohazard-sign_2623.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/upwards-black-arrow_2b06.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/north-east-arrow_2197.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-rightwards-arrow_27a1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/south-east-arrow_2198.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/downwards-black-arrow_2b07.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/south-west-arrow_2199.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/leftwards-black-arrow_2b05.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/north-west-arrow_2196.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/up-down-arrow_2195.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/left-right-arrow_2194.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/leftwards-arrow-with-hook_21a9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rightwards-arrow-with-hook_21aa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/arrow-pointing-rightwards-then-curving-upwards_2934.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/arrow-pointing-rightwards-then-curving-downwards_2935.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clockwise-downwards-and-upwards-open-circle-arrows_1f503.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/anticlockwise-downwards-and-upwards-open-circle-arrows_1f504.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/back-with-leftwards-arrow-above_1f519.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/end-with-leftwards-arrow-above_1f51a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/on-with-exclamation-mark-with-left-right-arrow-above_1f51b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/soon-with-rightwards-arrow-above_1f51c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/top-with-upwards-arrow-above_1f51d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/place-of-worship_1f6d0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/atom-symbol_269b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/om-symbol_1f549.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/star-of-david_2721.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wheel-of-dharma_2638.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/yin-yang_262f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/latin-cross_271d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/orthodox-cross_2626.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/star-and-crescent_262a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/peace-symbol_262e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/menorah-with-nine-branches_1f54e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/six-pointed-star-with-middle-dot_1f52f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/aries_2648.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/taurus_2649.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/gemini_264a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cancer_264b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/leo_264c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/virgo_264d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/libra_264e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/scorpius_264f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sagittarius_2650.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/capricorn_2651.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/aquarius_2652.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/pisces_2653.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ophiuchus_26ce.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/twisted-rightwards-arrows_1f500.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clockwise-rightwards-and-leftwards-open-circle-arrows_1f501.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/clockwise-rightwards-and-leftwards-open-circle-arrows-with-circled-one-overlay_1f502.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-right-pointing-triangle_25b6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-right-pointing-double-triangle_23e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-right-pointing-double-triangle-with-vertical-bar_23ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-right-pointing-triangle-with-double-vertical-bar_23ef.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-left-pointing-triangle_25c0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-left-pointing-double-triangle_23ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-left-pointing-double-triangle-with-vertical-bar_23ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/up-pointing-small-red-triangle_1f53c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-up-pointing-double-triangle_23eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/down-pointing-small-red-triangle_1f53d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-down-pointing-double-triangle_23ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/double-vertical-bar_23f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-square-for-stop_23f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-circle-for-record_23fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/eject-symbol_23cf.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cinema_1f3a6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/low-brightness-symbol_1f505.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/high-brightness-symbol_1f506.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/antenna-with-bars_1f4f6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/vibration-mode_1f4f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/mobile-phone-off_1f4f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-universal-recycling-symbol_267b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/fleur-de-lis_269c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/trident-emblem_1f531.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/name-badge_1f4db.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/japanese-symbol-for-beginner_1f530.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heavy-large-circle_2b55.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-heavy-check-mark_2705.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/ballot-box-with-check_2611.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heavy-check-mark_2714.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heavy-multiplication-x_2716.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/cross-mark_274c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/negative-squared-cross-mark_274e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heavy-plus-sign_2795.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heavy-minus-sign_2796.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heavy-division-sign_2797.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/curly-loop_27b0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/double-curly-loop_27bf.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/part-alternation-mark_303d.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/eight-spoked-asterisk_2733.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/eight-pointed-black-star_2734.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/sparkle_2747.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/double-exclamation-mark_203c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/exclamation-question-mark_2049.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-question-mark-ornament_2753.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-question-mark-ornament_2754.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-exclamation-mark-ornament_2755.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/heavy-exclamation-mark-symbol_2757.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/wavy-dash_3030.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/copyright-sign_a9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/registered-sign_ae.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/trade-mark-sign_2122.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-number-sign_23-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-asterisk_2a-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-digit-zero_30-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-digit-one_31-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-digit-two_32-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-digit-three_33-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-digit-four_34-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-digit-five_35-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-digit-six_36-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-digit-seven_37-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-digit-eight_38-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-digit-nine_39-fe0f-20e3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/keycap-ten_1f51f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/hundred-points-symbol_1f4af.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/input-symbol-for-latin-capital-letters_1f520.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/input-symbol-for-latin-small-letters_1f521.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/input-symbol-for-numbers_1f522.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/input-symbol-for-symbols_1f523.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/input-symbol-for-latin-letters_1f524.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/negative-squared-latin-capital-letter-a_1f170.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/negative-squared-ab_1f18e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/negative-squared-latin-capital-letter-b_1f171.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cl_1f191.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cool_1f192.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-free_1f193.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/information-source_2139.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-id_1f194.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/circled-latin-capital-letter-m_24c2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-new_1f195.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-ng_1f196.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/negative-squared-latin-capital-letter-o_1f17e.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-ok_1f197.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/negative-squared-latin-capital-letter-p_1f17f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-sos_1f198.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-up-with-exclamation-mark_1f199.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-vs_1f19a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-katakana-koko_1f201.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-katakana-sa_1f202.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cjk-unified-ideograph-6708_1f237.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cjk-unified-ideograph-6709_1f236.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cjk-unified-ideograph-6307_1f22f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/circled-ideograph-advantage_1f250.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cjk-unified-ideograph-5272_1f239.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cjk-unified-ideograph-7121_1f21a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cjk-unified-ideograph-7981_1f232.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/circled-ideograph-accept_1f251.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cjk-unified-ideograph-7533_1f238.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cjk-unified-ideograph-5408_1f234.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cjk-unified-ideograph-7a7a_1f233.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/circled-ideograph-congratulation_3297.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/circled-ideograph-secret_3299.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cjk-unified-ideograph-55b6_1f23a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/squared-cjk-unified-ideograph-6e80_1f235.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-small-square_25aa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-small-square_25ab.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-medium-square_25fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-medium-square_25fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-medium-small-square_25fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-medium-small-square_25fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-large-square_2b1b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-large-square_2b1c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/large-orange-diamond_1f536.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/large-blue-diamond_1f537.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/small-orange-diamond_1f538.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/small-blue-diamond_1f539.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/up-pointing-red-triangle_1f53a.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/down-pointing-red-triangle_1f53b.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/diamond-shape-with-a-dot-inside_1f4a0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/radio-button_1f518.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/black-square-button_1f532.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/white-square-button_1f533.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/medium-white-circle_26aa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/medium-black-circle_26ab.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/large-red-circle_1f534.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/large-blue-circle_1f535.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/chequered-flag_1f3c1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/triangular-flag-on-post_1f6a9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/crossed-flags_1f38c.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waving-black-flag_1f3f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/waving-white-flag_1f3f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/rainbow-flag_1f3f3-fe0f-200d-1f308.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-ascension-island_1f1e6-1f1e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-andorra_1f1e6-1f1e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-united-arab-emirates_1f1e6-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-afghanistan_1f1e6-1f1eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-antigua-barbuda_1f1e6-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-anguilla_1f1e6-1f1ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-albania_1f1e6-1f1f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-armenia_1f1e6-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-angola_1f1e6-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-antarctica_1f1e6-1f1f6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-argentina_1f1e6-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-american-samoa_1f1e6-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-austria_1f1e6-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-australia_1f1e6-1f1fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-aruba_1f1e6-1f1fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-aland-islands_1f1e6-1f1fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-azerbaijan_1f1e6-1f1ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-bosnia-herzegovina_1f1e7-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-barbados_1f1e7-1f1e7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-bangladesh_1f1e7-1f1e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-belgium_1f1e7-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-burkina-faso_1f1e7-1f1eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-bulgaria_1f1e7-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-bahrain_1f1e7-1f1ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-burundi_1f1e7-1f1ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-benin_1f1e7-1f1ef.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-st-barthelemy_1f1e7-1f1f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-bermuda_1f1e7-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-brunei_1f1e7-1f1f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-bolivia_1f1e7-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-caribbean-netherlands_1f1e7-1f1f6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-brazil_1f1e7-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-bahamas_1f1e7-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-bhutan_1f1e7-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-botswana_1f1e7-1f1fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-belarus_1f1e7-1f1fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-belize_1f1e7-1f1ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-canada_1f1e8-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-cocos-islands_1f1e8-1f1e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-congo-kinshasa_1f1e8-1f1e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-central-african-republic_1f1e8-1f1eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-congo-brazzaville_1f1e8-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-switzerland_1f1e8-1f1ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-cote-divoire_1f1e8-1f1ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-cook-islands_1f1e8-1f1f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-chile_1f1e8-1f1f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-cameroon_1f1e8-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-china_1f1e8-1f1f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-colombia_1f1e8-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-clipperton-island_1f1e8-1f1f5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-costa-rica_1f1e8-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-cuba_1f1e8-1f1fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-cape-verde_1f1e8-1f1fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-curacao_1f1e8-1f1fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-christmas-island_1f1e8-1f1fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-cyprus_1f1e8-1f1fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-czech-republic_1f1e8-1f1ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-germany_1f1e9-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-diego-garcia_1f1e9-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-djibouti_1f1e9-1f1ef.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-denmark_1f1e9-1f1f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-dominica_1f1e9-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-dominican-republic_1f1e9-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-algeria_1f1e9-1f1ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-ceuta-melilla_1f1ea-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-ecuador_1f1ea-1f1e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-estonia_1f1ea-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-egypt_1f1ea-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-western-sahara_1f1ea-1f1ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-eritrea_1f1ea-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-spain_1f1ea-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-ethiopia_1f1ea-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-european-union_1f1ea-1f1fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-finland_1f1eb-1f1ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-fiji_1f1eb-1f1ef.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-falkland-islands_1f1eb-1f1f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-micronesia_1f1eb-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-faroe-islands_1f1eb-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-france_1f1eb-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-gabon_1f1ec-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-united-kingdom_1f1ec-1f1e7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-grenada_1f1ec-1f1e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-georgia_1f1ec-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-french-guiana_1f1ec-1f1eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-guernsey_1f1ec-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-ghana_1f1ec-1f1ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-gibraltar_1f1ec-1f1ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-greenland_1f1ec-1f1f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-gambia_1f1ec-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-guinea_1f1ec-1f1f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-guadeloupe_1f1ec-1f1f5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-equatorial-guinea_1f1ec-1f1f6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-greece_1f1ec-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-south-georgia-south-sandwich-islands_1f1ec-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-guatemala_1f1ec-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-guam_1f1ec-1f1fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-guinea-bissau_1f1ec-1f1fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-guyana_1f1ec-1f1fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-hong-kong_1f1ed-1f1f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-heard-mcdonald-islands_1f1ed-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-honduras_1f1ed-1f1f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-croatia_1f1ed-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-haiti_1f1ed-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-hungary_1f1ed-1f1fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-canary-islands_1f1ee-1f1e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-indonesia_1f1ee-1f1e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-ireland_1f1ee-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-israel_1f1ee-1f1f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-isle-of-man_1f1ee-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-india_1f1ee-1f1f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-british-indian-ocean-territory_1f1ee-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-iraq_1f1ee-1f1f6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-iran_1f1ee-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-iceland_1f1ee-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-italy_1f1ee-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-jersey_1f1ef-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-jamaica_1f1ef-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-jordan_1f1ef-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-japan_1f1ef-1f1f5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-kenya_1f1f0-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-kyrgyzstan_1f1f0-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-cambodia_1f1f0-1f1ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-kiribati_1f1f0-1f1ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-comoros_1f1f0-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-st-kitts-nevis_1f1f0-1f1f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-north-korea_1f1f0-1f1f5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-south-korea_1f1f0-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-kuwait_1f1f0-1f1fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-cayman-islands_1f1f0-1f1fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-kazakhstan_1f1f0-1f1ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-laos_1f1f1-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-lebanon_1f1f1-1f1e7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-st-lucia_1f1f1-1f1e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-liechtenstein_1f1f1-1f1ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-sri-lanka_1f1f1-1f1f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-liberia_1f1f1-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-lesotho_1f1f1-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-lithuania_1f1f1-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-luxembourg_1f1f1-1f1fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-latvia_1f1f1-1f1fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-libya_1f1f1-1f1fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-morocco_1f1f2-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-monaco_1f1f2-1f1e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-moldova_1f1f2-1f1e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-montenegro_1f1f2-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-st-martin_1f1f2-1f1eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-madagascar_1f1f2-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-marshall-islands_1f1f2-1f1ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-macedonia_1f1f2-1f1f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-mali_1f1f2-1f1f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-myanmar_1f1f2-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-mongolia_1f1f2-1f1f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-macau_1f1f2-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-northern-mariana-islands_1f1f2-1f1f5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-martinique_1f1f2-1f1f6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-mauritania_1f1f2-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-montserrat_1f1f2-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-malta_1f1f2-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-mauritius_1f1f2-1f1fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-maldives_1f1f2-1f1fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-malawi_1f1f2-1f1fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-mexico_1f1f2-1f1fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-malaysia_1f1f2-1f1fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-mozambique_1f1f2-1f1ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-namibia_1f1f3-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-new-caledonia_1f1f3-1f1e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-niger_1f1f3-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-norfolk-island_1f1f3-1f1eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-nigeria_1f1f3-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-nicaragua_1f1f3-1f1ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-netherlands_1f1f3-1f1f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-norway_1f1f3-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-nepal_1f1f3-1f1f5.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-nauru_1f1f3-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-niue_1f1f3-1f1fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-new-zealand_1f1f3-1f1ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-oman_1f1f4-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-panama_1f1f5-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-peru_1f1f5-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-french-polynesia_1f1f5-1f1eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-papua-new-guinea_1f1f5-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-philippines_1f1f5-1f1ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-pakistan_1f1f5-1f1f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-poland_1f1f5-1f1f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-st-pierre-miquelon_1f1f5-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-pitcairn-islands_1f1f5-1f1f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-puerto-rico_1f1f5-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-palestinian-territories_1f1f5-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-portugal_1f1f5-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-palau_1f1f5-1f1fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-paraguay_1f1f5-1f1fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-qatar_1f1f6-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-reunion_1f1f7-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-romania_1f1f7-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-serbia_1f1f7-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-russia_1f1f7-1f1fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-rwanda_1f1f7-1f1fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-saudi-arabia_1f1f8-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-solomon-islands_1f1f8-1f1e7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-seychelles_1f1f8-1f1e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-sudan_1f1f8-1f1e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-sweden_1f1f8-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-singapore_1f1f8-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-st-helena_1f1f8-1f1ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-slovenia_1f1f8-1f1ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-svalbard-jan-mayen_1f1f8-1f1ef.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-slovakia_1f1f8-1f1f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-sierra-leone_1f1f8-1f1f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-san-marino_1f1f8-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-senegal_1f1f8-1f1f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-somalia_1f1f8-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-suriname_1f1f8-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-south-sudan_1f1f8-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-sao-tome-principe_1f1f8-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-el-salvador_1f1f8-1f1fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-sint-maarten_1f1f8-1f1fd.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-syria_1f1f8-1f1fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-swaziland_1f1f8-1f1ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-tristan-da-cunha_1f1f9-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-turks-caicos-islands_1f1f9-1f1e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-chad_1f1f9-1f1e9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-french-southern-territories_1f1f9-1f1eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-togo_1f1f9-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-thailand_1f1f9-1f1ed.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-tajikistan_1f1f9-1f1ef.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-tokelau_1f1f9-1f1f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-timor-leste_1f1f9-1f1f1.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-turkmenistan_1f1f9-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-tunisia_1f1f9-1f1f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-tonga_1f1f9-1f1f4.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-turkey_1f1f9-1f1f7.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-trinidad-tobago_1f1f9-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-tuvalu_1f1f9-1f1fb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-taiwan_1f1f9-1f1fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-tanzania_1f1f9-1f1ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-ukraine_1f1fa-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-uganda_1f1fa-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-us-outlying-islands_1f1fa-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-united-states_1f1fa-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-uruguay_1f1fa-1f1fe.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-uzbekistan_1f1fa-1f1ff.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-vatican-city_1f1fb-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-st-vincent-grenadines_1f1fb-1f1e8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-venezuela_1f1fb-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-british-virgin-islands_1f1fb-1f1ec.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-us-virgin-islands_1f1fb-1f1ee.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-vietnam_1f1fb-1f1f3.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-vanuatu_1f1fb-1f1fa.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-wallis-futuna_1f1fc-1f1eb.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-samoa_1f1fc-1f1f8.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-kosovo_1f1fd-1f1f0.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-yemen_1f1fe-1f1ea.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-mayotte_1f1fe-1f1f9.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-south-africa_1f1ff-1f1e6.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-zambia_1f1ff-1f1f2.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-zimbabwe_1f1ff-1f1fc.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-scotland_1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.png"
    }
    , {
        src: "https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/flag-for-wales_1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.png"
    }
    ], s=[], p=0, e=a.length;
    p<e;
    p++)s[p]=new Image,
    s[p].src=a[p].src;
    for(var m=function(a, p) {
        return imn=Math.floor(Math.random()*(p-a+1))+a, s[imn]
    }
    (0, s.length-1), t=document.getElementsByTagName("img"), o=t.length, i=0;
    i<o;
    i++)t[0].parentNode.removeChild(t[0]);
    document.body.appendChild(m)
}
