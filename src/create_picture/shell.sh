#!/bin/bash

cd /home/emchang/PycharmProjects/stableDiffusionV2/stablediffusion

# shellcheck disable=SC2030

User=$1 #this is User
suggested=$2 #this is suggested word
edited_suggested=${suggested// /_}."93.final.png"

echo $User
echo $edited_suggested

python scripts/txt2img.py --prompt "$2" --ckpt ./v2-1_768-ema-pruned.ckpt --config configs/stable-diffusion/v2-inference-v.yaml --H 768 --W 768 --outdir outputs/samples/$1 

# if [ ! -d /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/public/images/$1 ];then
#     mkdir /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/public/images/$1
#     cp /Users/changhoon/PycharmProjects/stable_get_setting/ml-stable-diffusion/$edited_suggested /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/public/images/$1/$edited_suggested
# else
#     cp /Users/changhoon/PycharmProjects/stable_get_setting/ml-stable-diffusion/$edited_suggested /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/public/images/$1/$edited_suggested
# fi

# #cp /Users/changhoon/PycharmProjects/stable_get_setting/ml-stable-diffusion/$edited_suggested /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/resources/Data/$User


# #cp /Users/changhoon/PycharmProjects/stable_get_setting/ml-stable-diffusion/$edited_suggested /Users/changhoon/Desktop/Picasso_Project_AfterJanuary/PicassoBackend/resources/Data/



