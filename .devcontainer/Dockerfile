FROM node:22-slim

ARG USER_NAME=vscode
ARG USER_ID=1000
ARG GROUP_ID=${USER_ID}

ENV DEBIAN_FRONTEND=nointeractive \
    LANG=ja_JP.UTF-8

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    git \
    sudo \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN userdel -r node

RUN groupadd -g ${GROUP_ID} ${USER_NAME} \
    && useradd -s /bin/bash -u ${USER_ID} -g ${GROUP_ID} -m ${USER_NAME} \
    && echo "${USER_NAME} ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${USER_NAME} \
    && chmod 0440 /etc/sudoers.d/${USER_NAME}

USER ${USER_NAME}

WORKDIR /app
