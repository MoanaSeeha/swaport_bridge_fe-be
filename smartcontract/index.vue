<template>
  <v-app>
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col-auto col-lg-6">
            <svg
            class="header__logo"
              width="89"
              height="100"
              viewBox="0 0 89 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="89" height="100" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_59_439"
                    transform="translate(0 -0.0113221) scale(0.00160256 0.00142628)"
                  />
                </pattern>
                <image
                  id="image0_59_439"
                  width="624"
                  height="717"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnAAAALNCAYAAACvR1wIAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAqqaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ2NDgsIDIwMjEvMDEvMTItMTU6NTI6MjkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzJkMDBhYTgtY2NlMC03YzRkLTlkOTEtYTRmMjJjOGI2NzBkIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVkYTg2ZmViLTBhMmEtMzU0YS1hMDMzLTRhNjk1NmI1MjM0YiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJBRUUzMjI2OEYyODZFNkRBQkQ5QkM4ODA3MjhGMkExQSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJBZG9iZSBSR0IgKDE5OTgpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMi0xMlQyMzoyMzowNiswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDItMjhUMTg6MjE6NDIrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDItMjhUMTg6MjE6NDIrMDc6MDAiIHRpZmY6SW1hZ2VXaWR0aD0iNDI0IiB0aWZmOkltYWdlTGVuZ3RoPSI0NDUiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6WFJlc29sdXRpb249IjcyLzEiIHRpZmY6WVJlc29sdXRpb249IjcyLzEiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6RXhpZlZlcnNpb249IjAyMzEiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI0MjQiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI0NDUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ODUxOWQ5YS1kYWVkLTVhNGMtOWQ0Ni0xZmNjOTczM2JmNWEiIHN0RXZ0OndoZW49IjIwMjItMDItMTNUMDA6MjI6MjErMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWE1MWJjMTQtZDI3NC0yZjRkLTg1ZDEtZmY3ODY4MDQ2MWNjIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTEzVDAwOjIyOjIxKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVkYTg2ZmViLTBhMmEtMzU0YS1hMDMzLTRhNjk1NmI1MjM0YiIgc3RFdnQ6d2hlbj0iMjAyMi0wMi0yOFQxODoyMTo0MiswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ODUxOWQ5YS1kYWVkLTVhNGMtOWQ0Ni0xZmNjOTczM2JmNWEiIHN0UmVmOmRvY3VtZW50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"
                />
              </defs>
            </svg>
            <span class="header__logo-brand">Bridge</span>
          </div>
          <div class="col col-lg-6 d-flex justify-content-end align-items-center">
            <div class="d-none-c d-lg-block-c">
              <v-dialog v-model="dialog" max-width="300">
                <template #activator="{ on, attrs }">
                  <div
                    v-if="!controllerInfo || controllerInfo.PSD"
                    class="btn text-uppercase"
                    disabled
                  >
                    {{ connectButtonLabel }}
                  </div>

                  <div
                    v-else
                    class="btn text-uppercase"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span>{{ connectButtonLabel }}</span>
                    <v-icon v-if="wallet" right>mdi-check</v-icon>
                  </div>
                </template>

                <div class="connect-modal__content">
                  <div class="connect-modal__title">Connect using:</div>
                  <div class="connect-modal__links">
                    <div
                      :disabled="providerType === 'M'"
                      @click="clickConnectMetamask"
                      class="connect-modal__link btn btn--white mb-4"
                    >
                      <img src="/MetaMask_Fox.png" class="me-3" />
                      <div class="w-100 text-center">MetaMask</div>
                    </div>

                    <div
                      :disabled="providerType === 'W'"
                      @click="clickConnectWalletconnect"
                      class="connect-modal__link btn btn--white"
                    >
                      <img src="/WalletConnect.png" class="me-3" />
                      <div class="w-100 text-center">WalletConnect</div>
                    </div>
                  </div>
                </div>
              </v-dialog>
            </div>

            <div class="mobile-nav-wrapper">
              <div
                class="mobile-nav-toggler"
                @click="()=>{mobileNavIsActive = true}"
              >
                <svg
                  width="36"
                  height="31"
                  viewBox="0 0 36 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="5" rx="2.5" fill="#7A18D5" />
                  <rect y="13" width="36" height="5" rx="2.5" fill="#7A18D5" />
                  <rect y="26" width="36" height="5" rx="2.5" fill="#7A18D5" />
                </svg>
              </div>
              <div v-if="mobileNavIsActive" class="mobile-nav-underlay"></div>
              <div
                v-if="mobileNavIsActive"
                class="mobile-nav"
                v-click-outside="()=>{mobileNavIsActive = false}"
              >
                <div class="mobile-nav-content d-flex flex-column justify-content-between">
                  <div>
                    <div
                    class="btn text-uppercase mb-40 w-100"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="()=>{dialog= true}"
                  >
                    <span>Connect</span>
                    <!---->
                  </div>
                  <div class="faqlist">
                    <a target="_blank" href="https://dbx.so/">How it works</a>
                    <a target="_blank" href="https://dbx.so/frequently-asked-questions/">FAQ</a>
                    <a target="_blank" href="https://dbx.so/beginners-guide-to-dbx/">User guide</a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCcA-81eN2c6-cfaVz0JXguQ">Video guide (Youtube)</a>
                  </div>

                  </div>
                  


<div>

<a target="_blank" href="https://t.me/dbx_network" class="btn contact-btn btn--white w-100 mb-40"><img src="/tg.png" class="me-3">
                  Support</a>

                  <div class='row'>
                    <a target="_blank" href="https://twitter.com/dbx_network" class="col-4">
                      <img src="/soc1.png"/>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCcA-81eN2c6-cfaVz0JXguQ" class="col-4">
                      <img src="/soc2.png"/>
                    </a>
                    <a target="_blank" href="https://t.me/dbx_network" class="col-4">
                      <img src="/soc3.png"/>
                    </a>
                  </div>
</div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="wrapper mx-auto">
      <main class="main">
        <div class="row g-0 g-lg-3">
          <div class="col-lg-5 d-none-c d-lg-block-c">
            <div class="swapper__sidebar">
              <div class="swapper__sidebar-inner">
                <img class="img-underlay" src="/UFO.png" />

                <div v-if="!wallet">
                  <h1 class="text-center swapper__sidebar-title">DBX Bridge</h1>
                  <p class="text-black">
                    Fastest way to transfer you DBX coins through popular
                    blockchain system’s
                  </p>

                  <div class="faqlist">
                    <a target="_blank" href="https://dbx.so/">How it works</a>
                    <a target="_blank" href="https://dbx.so/frequently-asked-questions/">FAQ</a>
                    <a target="_blank" href="https://dbx.so/beginners-guide-to-dbx/">User guide</a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCcA-81eN2c6-cfaVz0JXguQ">Video guide (Youtube)</a>
                  </div>
                </div>

                <div v-else>
                  <div class="swapper-quantity__item">
                    <span class="swapper__label">Your fee:</span>
                    <span
                      >{{ controllerInfo ? BNStrToNumstr(feeBNStr) : "..." }}
                      DBX</span
                    >
                  </div>

                  <div class="swapper-quantity__item">
                    <span class="swapper__label">Approved:</span>
                    <span>{{ BNStrToNumstr(currentApproved) }} DBX</span>
                  </div>

                  <div class="swapper-quantity__item">
                    <span class="swapper__label">Minimum swap amount:</span>
                    <span>{{ BNStrToNumstr(minBNStr) }} DBX</span>
                  </div>

                  <div class="swapper-quantity__item mb-40">
                    <span class="swapper__label">You’ll receive:</span>
                    <span>
                      {{ amountEnough && controllerInfo ? "~" + BNStrToNumstr( substractFee( amountBN.toString(), feeBNStr ).toString() ) : "..." }}
                      DBX
                    </span>
                  </div>

                  <div class="swapper__label mb-4">Have a problem?</div>
                  <a target="_blank" href="https://t.me/dbx_network" class="btn contact-btn btn--white">
                    <img src="/tg.png" class="me-3" />
                    Contact us on TG</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7 position-relative">
            
            <div v-if="errorDialog" class="error-modal-dialog">
              <div class="error-modal">
                <div
                  class="error-modal_close"
                  @click="(e)=>{this.showErrorDialog = false}"
                ></div>
                <p>{{ errorMessage }}</p>

                <div :class="{'related-topics': true, 'error-modal-dialog--fade-in':errorDialogfadeIn }">
                  <p>Related Topics</p>
                  <a target="_blank" class="error-modal-link" href="/"
                    >How to change network in MetaMask</a
                  >
                  <a target="_blank" class="error-modal-link" href="/"
                    >How to add DBX Smart Network to MetaMask</a
                  >
                </div>
                
              </div>
            </div>

            <div :class="{'swapper':true, 'blur_underlay':errorDialog }">
              <div class="swapper__inner">
                <div class="swapper__label mb-4">From</div>
                <v-select
                  outlined
                  :value="FromToken"
                  :items="Tokens"
                  :disabled="!!loading_swapping"
                  @change="selectFromOnChangeHandler"
                  label="Select from"
                  solo
                >
                  <v-icon slot="append" size="12">fa fa-chevron-down</v-icon>

                  <template v-slot:selection="{ item }">
                    <img
                      v-if="FromToken === 'DBX Smart Network'"
                      src="/dbx.png"
                    />
                    <img
                      v-if="FromToken === 'Ethereum'"
                      src="/ethereumlogo.png"
                    />
                    <img
                      v-if="FromToken === 'BSC'"
                      src="/binancelogo.png"
                    />

                    <span class="select-btn__output-txt">{{ item }}</span>

                    <span
                      class="select-btn__output-balance ms-auto me-3 d-none d-lg-block"
                    >
                      Balance:
                      <span class="text-bold"
                        >{{ BNStrToNumstr(dirBalance[0]) }} DBX</span
                      >
                    </span>
                  </template>

                  <template v-slot:item="{ item }">
                    <img
                      v-if="item === 'DBX Smart Network'"
                      src="/dbx.png"
                    />
                    <img
                      v-if="item === 'Ethereum'"
                      src="/ethereumlogo.png"
                    />
                    <img
                      v-if="item === 'BSC'"
                      src="/binancelogo.png"
                    />
                    {{ item }}
                  </template>
                </v-select>
                <span
                  class="select-btn__output-balance mx-auto mb-4 d-block d-lg-none text-center"
                >
                  Balance:
                  <span class="text-bold"
                    >{{ BNStrToNumstr(dirBalance[0]) }} DBX</span
                  >
                </span>

                <label class="swapper__amount">
                  <img src="/dbx-amount.png" class="me-3" />

                  <div class="select-btn__output-txt">DBX coin</div>
                  <v-text-field
                    v-if="contractInfoOk"
                    v-model="inputAmount"
                    class="ms-auto me-3 fs-18"
                    :rules="[
                          () => amountValid || 'Enter proper amount',
                          () => amountEnough || 'Amount is too low',
                          () => balanceEnough || 'Balance too low',
                        ]"
                    required
                    @click:append="handleClickAppend"
                  />

                  <div v-else class="ms-auto me-3 fs-18">{{inputAmount}}</div>

                  <div class="max-button" @click="inputAmount = BNStrToNumstr(dirBalance[0])">MAX</div>
                </label>

                <div v-if="inputAmount !== '0'" class="d-block d-lg-none mb-40">
                  <div class="swapper-quantity__item">
                    <span class="swapper__label">Your fee:</span>
                    <span
                      >{{ controllerInfo ? BNStrToNumstr(feeBNStr) : "..." }}
                      DBX</span
                    >
                  </div>

                  <div class="swapper-quantity__item">
                    <span class="swapper__label">Approved:</span>
                    <span>{{ BNStrToNumstr(currentApproved) }} DBX</span>
                  </div>

                  <div class="swapper-quantity__item">
                    <span class="swapper__label">Minimum swap amount:</span>
                    <span>{{ BNStrToNumstr(minBNStr) }} DBX</span>
                  </div>

                  <div class="swapper-quantity__item">
                    <span class="swapper__label">You’ll receive:</span>
                    <span>
                      {{ amountEnough && controllerInfo ? "~" + BNStrToNumstr( substractFee( amountBN.toString(), feeBNStr ).toString() ) : "..." }}
                      DBX
                    </span>
                  </div>
                </div>

                <div class="swapper__label">To</div>

                <v-select
                  outlined
                  :value="ToToken"
                  :items="Tokens"
                  :disabled="!!loading_swapping"
                  @change="selectToOnChangeHandler"
                  label="Select to"
                  solo
                >
                  <v-icon slot="append" size="12">fa fa-chevron-down</v-icon>
                  <template v-slot:selection="{ item }">
                    <img
                      v-if="ToToken === 'DBX Smart Network'"
                      src="/dbx.png"
                    />
                    <img
                      v-if="ToToken === 'Ethereum'"
                      src="/ethereumlogo.png"
                    />
                    <img
                      v-if="ToToken === 'BSC'"
                      src="/binancelogo.png"
                    />
                    <span class="select-btn__output-txt">{{ item }}</span>
                    <span
                      class="select-btn__output-balance ms-auto me-3 d-none d-lg-block"
                    >
                      Balance:
                      <span class="text-bold"
                        >{{ BNStrToNumstr(dirBalance[1]) }} DBX</span
                      >
                    </span>
                  </template>

                  <template v-slot:item="{ item }">
                    <img
                      v-if="item === 'DBX Smart Network'"
                      src="/dbx.png"
                    />
                    <img
                      v-if="item === 'Ethereum'"
                      src="/ethereumlogo.png"
                    />
                    <img
                      v-if="item === 'BSC'"
                      src="/binancelogo.png"
                    />

                    {{ item }}
                  </template>
                </v-select>

                <span
                  class="select-btn__output-balance mx-auto me-3 d-block d-lg-none text-center"
                >
                  Balance:
                  <span class="text-bold"
                    >{{ BNStrToNumstr(dirBalance[1]) }} DBX</span
                  >
                </span>
                <button
                  class="btn w-100 swap-btn"
                  :loading="loading_swapping"
                  v-if="requestDisabled"
                  disabled
                  @click="handleClickRequest"
                >
                  TRANSFER
                </button>

                <button
                  class="btn w-100 swap-btn"
                  :loading="loading_swapping"
                  v-else
                  @click="handleClickRequest"
                >
                  TRANSFER
                </button>
              </div>

              <v-card-text v-if="hashes && hashes_url && hashes_names">
                Transaction hashes:
                <br />
                Collect ({{ hashes_names.C }})
                <a
                  :href="`${hashes_url.C}/tx/${hashes.txHashCollect}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ hashes.txHashCollect }}
                </a>
                <br />
                Dispense ({{ hashes_names.D }})
                <a
                  :href="`${hashes_url.D}/tx/${hashes.txHashDispense}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ hashes.txHashDispense }}
                </a>
              </v-card-text>
            </div>
          </div>
        </div>

        <div
          v-if="
                loadingMessage ||
                warningMessage ||
                inBetween ||
                hashes
              "
          class="message-container"
        >
          <v-alert v-if="loadingMessage" outlined type="info">
            {{ loadingMessage }}
          </v-alert>

          <v-alert v-if="warningMessage" dismissible outlined type="warning">
            {{ warningMessage }}
          </v-alert>

          <v-alert v-if="inBetween" outlined type="info">
            Value sent. Sending request to controller. It might take up to 5min,
            please wait...
          </v-alert>

          <v-alert v-if="hashes" outlined type="success">
            Success! Save transaction hashes below
          </v-alert>
        </div>
      </main>
    </div>
  </v-app>
</template>

<script lang="ts">
/* eslint-disable camelcase */
/* eslint-disable no-console */
import Vue from "vue";

import { Contract, providers, BigNumber } from "ethers";
import Axios from "axios";
import Token from "~/abis/Token.json";
import BridgeAssist from "~/abis/BridgeAssist.json";
const address_BABE = "0xE562014651C191178CA2Be7f86910760Ce957C7f";
const address_BABX = "0x3A893beAC002c85CB6D85865C66093F420483FE2";
const address_BAEB = "0x227996B1f17c5E8caB4Cc843124f0Cf6399d37D9";
const address_BAEX = "0xd274515b94fAb45639136a5BFF74F704509680c7";

const address_BAX = "0x547e9337C88ADFe32C2A9e5273F281b813FB085D";
const address_TKNB = "0x67dcAa9468c219ad81F5825EF0c8f58879c657dd";
const address_TKNE = "0x3cbc780d2934d55a06069e837fabd3e6fc23dab0";

const _providerB = new providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
); // for reading contracts
const _providerE = new providers.InfuraProvider(
  1,
  "976b8b2358be48468b36d8739e79414e"
); // for reading contracts
const _providerX = new providers.JsonRpcProvider("https://dbxnode.com"); // for reading contracts
const TKNE = new Contract(address_TKNE, Token.abi, _providerE);
const TKNB = new Contract(address_TKNB, Token.abi, _providerB);

const BAX = new Contract(address_BAX, BridgeAssist.abi, _providerX);

const JSONRPC_BSC = {
  id: 1,
  jsonrpc: "2.0",
  method: "wallet_addEthereumChain",
  params: [
    {
      chainName: "Binance Smart Chain Mainnet",
      chainId: "0x38",
      nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: [
        "https://bsc-dataseed1.binance.org",
        "https://bsc-dataseed2.binance.org",
        "https://bsc-dataseed3.binance.org",
        "https://bsc-dataseed4.binance.org",
        "https://bsc-dataseed1.defibit.io",
        "https://bsc-dataseed2.defibit.io",
        "https://bsc-dataseed3.defibit.io",
        "https://bsc-dataseed4.defibit.io",
        "https://bsc-dataseed1.ninicoin.io",
        "https://bsc-dataseed2.ninicoin.io",
        "https://bsc-dataseed3.ninicoin.io",
        "https://bsc-dataseed4.ninicoin.io",
        "wss://bsc-ws-node.nariox.org",
      ],
      blockExplorerUrls: ["https://bscscan.com"],
      iconUrls: [
        "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg",
        "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
      ],
    },
  ],
};

const Tokens = [
  "Ethereum",
  "BSC",
  "DBX Smart Network",
];

function _wait(ms = 20000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function removeTrailingZeros(str: string): string {
  if (str === "0") return str;
  if (str.slice(-1) === "0")
    return removeTrailingZeros(str.substr(0, str.length - 1));
  if (str.slice(-1) === ".") return str.substr(0, str.length - 1);
  return str;
}
function numstrToBN(input: string): BigNumber {
  const spl = input.split(".");
  if (spl[1]) spl[1] = spl[1].substr(0, 18);
  return BigNumber.from(
    spl.join("") + "000000000000000000".substr(0, 18 - (spl[1] || "").length)
  );
}
function BNStrToNumstr(str: string, precision = 3): string {
  if (str === "0") return str;
  if (isNaN(Number(str))) return "NaN";
  if (str.length <= 18)
    return removeTrailingZeros(
      ("0." + "000000000000000000".substr(0, 18 - str.length) + str).substr(
        0,
        18 - str.length + precision + 2
      )
    );
  else
    return [str.substr(0, str.length - 18), str.slice(-18)]
      .join(".")
      .substr(0, str.length - 18 + precision + 1);
}
function substractFee(amount: string, fee: string) {
  return BigNumber.from(amount).sub(fee);
}
type DirectionType = "EB" | "BE" | "EX" | "BX" | "XE" | "XB";
export default Vue.extend({
  data() {
    return {
      mobileNavIsActive : false,
      Tokens,
      FromToken: "Ethereum",
      ToToken: "BSC",
      provider: null as providers.Web3Provider | null,
      signer: null as providers.JsonRpcSigner | null,
      wallet: "",
      direction: "EB" as DirectionType,
      approvedEB: "",
      approvedEX: "",
      approvedBE: "",
      approvedBX: "",
      approvedX: "",
      approvedX_dirE: false,
      balanceE: "",
      balanceB: "",
      balanceX: "",
      inputAmount: "0",
      controllerInfo: null as {
        BE: string;
        EB: string;
        EX: string;
        BX: string;
        XE: string;
        XB: string;
        PSD: boolean;
      } | null,
      errorMessage_misc: "",
      showErrorDialog: false,
      errorDialogfadeIn: false,
      warningMessage: "",
      successMessage: "",
      loading_swapping: false,
      loading_approve: false,
      loading_request: false,
      loading_provider: false,
      loading_controllerInfo: true,
      loading_contractInfo: false,
      loading_add: false,
      paused_chainIdHandler: false,
      inBetween: false,
      hashes: null as { txHashCollect: string; txHashDispense: string } | null,
      hashes_url: null as { C: string; D: string } | null,
      hashes_names: null as { C: string; D: string } | null,
      dialog: false,
      dialog_help: false,
      chainId: null as null | number,
    };
  },
  computed: {
    // MESSAGES
    connectButtonLabel(): string {
      return this.wallet
        ? this.wallet.substr(0, 6) + "..." + this.wallet.substr(-4)
        : "Connect";
    },
    loadingMessage(): string {
      return this.loading_controllerInfo
        ? "Loading controller info..."
        : this.loading_provider
        ? "Connecting provider..."
        : this.loading_contractInfo
        ? "Loading contract info..."
        : "";
    },
    err_controllerInfo(): boolean {
      return !this.loading_controllerInfo && !this.controllerInfo;
    },
    err_shutDown(): boolean {
      return this.preShutDown;
    },
    err_chainId(): boolean {
      return (
        !!this.chainId &&
        this.chainId !==
          { EB: 1, BE: 56, EX: 1, BX: 56, XE: 5348, XB: 5348 }[this.direction]
      );
    },
    err_balanceLow(): boolean {
      return (
        !!this.dirBalance[0] &&
        BigNumber.from(this.dirBalance[0]).lt(this.minBNStr)
      );
    },
    errorMessage(): string {
     
      this.showErrorDialog = true;
      this.errorDialogfadeIn = false;
      setTimeout(()=>{this.errorDialogfadeIn = true;}, 1500);

      return this.err_controllerInfo
        ? "Could not load info from controller. Usage is blocked. Try refreshing the page"
        : this.err_shutDown
        ? "Controller will soon shut down for maintenance. Usage is blocked. Please wait"
        : this.err_chainId
        ? `You selected wrong network for this direction. Select ${
            this.dirChainName[0]
          } in your provider${
            this.providerType === "M" ? "" : " and refresh the page"
          }`
        : this.err_balanceLow
        ? "Your balance is lower than minimum amount. Usage is blocked"
        : this.errorMessage_misc;
    },

    errorDialog(): boolean{
      
      return this.showErrorDialog && Boolean(this.errorMessage);
    },
    smAndUp(): boolean {
      return (this as any).$vuetify.breakpoint.smAndUp;
    },
    providerType(): "N" | "W" | "M" {
      return !this.provider
        ? "N"
        : this.provider.provider.isMetaMask
        ? "M"
        : "W";
    },
    dirChainName(): string[] {
      return {
        EB: ["Ethereum", "BSC"],
        BE: ["BSC", "Ethereum"],
        EX: ["Ethereum", "DBX Smart Network"],
        BX: ["BSC", "DBX Smart Network"],
        XE: ["DBX Smart Network", "Ethereum"],
        XB: ["DBX Smart Network", "BSC"],
      }[this.direction];
    },
    dirChainNameShort(): string[] {
      return {
        EB: ["ETH", "BSC"],
        BE: ["BSC", "ETH"],
        EX: ["ETH", "DBX"],
        BX: ["BSC", "DBX"],
        XE: ["DBX", "ETH"],
        XB: ["DBX", "BSC"],
      }[this.direction];
    },
    dirChainExplorer(): string[] {
      return {
        EB: ["https://etherscan.io", "https://bscscan.com"],
        BE: ["https://bscscan.com", "https://etherscan.io"],
        EX: ["https://etherscan.io", "https://dbxscan.com"],
        BX: ["https://bscscan.com", "https://dbxscan.com/"],
        XE: ["https://dbxscan.com/", "https://etherscan.io"],
        XB: ["https://dbxscan.com/", "https://bscscan.com"],
      }[this.direction];
    },
    dirChainLogo(): string[] {
      return {
        EB: ["/ethereumlogo.png", "/binancelogo.png"],
        BE: ["/binancelogo.png", "/ethereumlogo.png"],
        EX: ["/ethereumlogo.png", "/dbxlogo.png"],
        BX: ["/binancelogo.png", "/dbxlogo.png"],
        XE: ["/dbxlogo.png", "/ethereumlogo.png"],
        XB: ["/dbxlogo.png", "/binancelogo.png"],
      }[this.direction];
    },
    dirBalance(): string[] {
      return {
        EB: [this.balanceE, this.balanceB],
        BE: [this.balanceB, this.balanceE],
        EX: [this.balanceE, this.balanceX],
        BX: [this.balanceB, this.balanceX],
        XE: [this.balanceX, this.balanceE],
        XB: [this.balanceX, this.balanceB],
      }[this.direction];
    },
    currentApproved(): string {
      return {
        EB: this.approvedEB,
        BE: this.approvedBE,
        EX: this.approvedEX,
        BX: this.approvedBX,
        XE: this.approvedX,
        XB: this.approvedX,
      }[this.direction];
    },
    // TECHNICAL OK
    preShutDown(): boolean {
      return !!this.controllerInfo?.PSD;
    },
    contractInfoOk(): boolean {
      return !!this.currentApproved && !!this.dirBalance[0];
    },
    allSafe(): boolean {
      return (
        !!this.wallet &&
        !!this.controllerInfo &&
        this.contractInfoOk &&
        !this.errorMessage &&
        !this.loading_controllerInfo &&
        !this.loading_provider &&
        !this.loading_contractInfo
      );
    },
    // VALID DATA
    approvedEqual(): boolean {
      return this.amountBN.eq(this.currentApproved);
    },
    amountValid(): boolean {
      return !!Number(this.inputAmount);
    },
    approvedNonZero(): boolean {
      return this.approvedBN.gt(0);
    },
    // ENOUGH
    amountEnough(): boolean {
      return this.minBNStr ? this.amountBN.gte(this.minBNStr) : false;
    },
    balanceEnough(): boolean {
      return this.amountBN.lte(this.dirBalance[0]);
    },
    approvedEnough(): boolean {
      if (!this.controllerInfo) return false;
      return this.approvedBN.gte(this.minBNStr);
    },
    // BUTTONS DISABLED
    requestDisabled(): boolean {
      return !(
        this.allSafe &&
        this.amountValid &&
        this.amountEnough &&
        this.balanceEnough
      );
    },
    canMaximizeAmount(): boolean {
      return !this.approvedNonZero && this.amountBN.lt(this.dirBalance[0]);
    },
    // CONVERTERS
    amountBN(): BigNumber {
      return this.amountValid
        ? numstrToBN(this.inputAmount.trim())
        : BigNumber.from(0);
    },
    approvedBN(): BigNumber {
      return BigNumber.from(this.currentApproved || 0);
    },
    feeBNStr(): string {
      if (!this.controllerInfo) return "";
      return this.controllerInfo[this.direction];
    },
    minBNStr(): string {
      if (!this.controllerInfo) return "";
      return (this.controllerInfo as any)["MIN_" + this.direction];
    },
  },
  async mounted() {
    if (!this.smAndUp) window.scrollTo(0, 160);
    await this.loadControllerInfo();
  },
  methods: {
    BNStrToNumstr,
    substractFee,
    async updateChainId() {
      this.chainId = (await this.provider?.getNetwork())?.chainId || null;
    },
    async clickConnectWalletconnect() {
      this.dialog = false;
      if (this.providerType === "M") this.wallet = "";
      await this.connectWalletconnect();
      if (this.wallet) await this.loadContractInfo();
      if (this.contractInfoOk && this.approvedNonZero)
        this.restoreInputAmount();
    },
    async connectWalletconnect() {
      this.loading_provider = true;
      try {
        const WalletConnectProvider =
          require("@walletconnect/web3-provider").default;
        const wc = new WalletConnectProvider(
          this.direction === "EB" || this.direction === "EX"
            ? {
                rpc: {
                  1: "https://mainnet.infura.io/v3/f91771c75ee2409198e8ea8561bfaea8",
                },
                chainId: 1,
                qrcode: true,
              }
            : this.direction === "XB" || this.direction === "XE"
            ? {
                rpc: { 5348: "https://dbxnode.com" },
                chainId: 5348,
                qrcode: true,
              }
            : {
                rpc: { 56: "https://bsc-dataseed.binance.org/" },
                chainId: 56,
                qrcode: true,
              }
        );
        await wc.enable();
        this.provider = new providers.Web3Provider(wc);
        this.signer = this.provider.getSigner();
        this.wallet = await this.signer.getAddress();
        await this.updateChainId();
      } catch (error : any) {
        this.errorMessage_misc =
          "Could not connect Walletconnect. Error: " + error.message;
        console.error(error);
      }
      this.loading_provider = false;
    },
    async clickConnectMetamask() {
      this.dialog = false;
      if (this.providerType === "W") this.wallet = "";
      await this.connectMetamask();
      (window.ethereum as any).on("chainChanged", async (chainId: string) => {
        console.log({ chainId });
        if (this.loading_swapping) {
          this.paused_chainIdHandler = true;
          return;
        }
        if (!this.paused_chainIdHandler) this.hashes = null;
        switch (chainId) {
          case "0x1":
            if (this.ToToken == "Ethereum") {
              this.ToToken = this.FromToken;
              this.direction = (this.direction[1] +
                this.direction[0]) as DirectionType;
            }
            this.direction = ("E" + this.direction[1]) as DirectionType;
            this.FromToken = "Ethereum";
            break;
          case "0x38":
            if (this.ToToken == "BSC") {
              this.ToToken = this.FromToken;
              this.direction = (this.direction[1] +
                this.direction[0]) as DirectionType;
            }
            this.direction = ("B" + this.direction[1]) as DirectionType;
            this.FromToken = "BSC";
            break;
          case "0x14E4":
            if (this.ToToken == "DBX Smart Network") {
              this.ToToken = this.FromToken;
              this.direction = (this.direction[1] +
                this.direction[0]) as DirectionType;
            }
            this.direction = ("X" + this.direction[1]) as DirectionType;
            this.FromToken = "DBX Smart Network";
            break;
          default:
            return;
        }
        await this.connectMetamask();
        if (this.contractInfoOk && this.approvedNonZero)
          this.restoreInputAmount();
      });
      if (this.wallet) await this.loadContractInfo();
      if (this.contractInfoOk && this.approvedNonZero)
        this.restoreInputAmount();
    },
    async connectMetamask() {
      this.loading_provider = true;
      try {
        if (!window.ethereum)
          throw new Error("Please set up MetaMask properly");
        await (window.ethereum as any).enable();
        this.provider = new providers.Web3Provider(
          (window.ethereum as any) || window.web3
        );
        this.signer = this.provider.getSigner();
        this.wallet = await this.signer.getAddress();
        await this.updateChainId();
        if (!this.paused_chainIdHandler) this.hashes = null;
        switch (this.chainId) {
          case 1:
            if (this.ToToken == "Ethereum") {
              this.ToToken = this.FromToken;
              this.direction = (this.direction[1] +
                this.direction[0]) as DirectionType;
            }
            this.direction = ("E" + this.direction[1]) as DirectionType;
            this.FromToken = "Ethereum";
            break;
          case 56:
            if (this.ToToken == "BSC") {
              this.ToToken = this.FromToken;
              this.direction = (this.direction[1] +
                this.direction[0]) as DirectionType;
            }
            this.direction = ("B" + this.direction[1]) as DirectionType;
            this.FromToken = "BSC";
            break;
          case 5348:
            if (this.ToToken == "DBX Smart Network") {
              this.ToToken = this.FromToken;
              this.direction = (this.direction[1] +
                this.direction[0]) as DirectionType;
            }
            this.direction = ("X" + this.direction[1]) as DirectionType;
            this.FromToken = "DBX Smart Network";
            break;
          default:
            return;
        }
      } catch (error: any) {
        this.errorMessage_misc =
          "Could not connect MetaMask. Error: " + error.messagee;
        console.error(error);
      }
      this.loading_provider = false;
    },
    restoreInputAmount() {
      this.inputAmount = removeTrailingZeros(
        BNStrToNumstr(this.currentApproved, 18)
      );
    },
    handleClickAppend() {
      if (this.approvedEnough && !this.approvedEqual) this.restoreInputAmount();
      else if (this.canMaximizeAmount)
        this.inputAmount = removeTrailingZeros(
          BNStrToNumstr(this.dirBalance[0], 18)
        );
    },
    async handleClickAdd() {
      this.loading_add = true;
      try {
        const addedNetwork = await this.provider?.provider.request?.(
          JSONRPC_BSC
        );
        await this.updateChainId();
        console.log({ addedNetwork });
      } catch (error) {
        console.error(error);
      }
      this.loading_add = false;
    },
    selectFromOnChangeHandler(data: any) {
      this.hashes = null;
      if (data == this.ToToken) {
        this.direction = (this.direction[1] +
          this.direction[0]) as DirectionType;
        this.ToToken = this.FromToken;
        this.FromToken = data;
      } else {
        switch (data) {
          case "Ethereum":
            this.direction = ("E" + this.direction[1]) as DirectionType;
            this.FromToken = "Ethereum";
            break;
          case "BSC":
            this.direction = ("B" + this.direction[1]) as DirectionType;
            this.FromToken = "BSC";
            break;
          case "DBX Smart Network":
            this.direction = ("X" + this.direction[1]) as DirectionType;
            this.FromToken = "DBX Smart Network";
            break;
        }
      }
    },
    selectToOnChangeHandler(data: any) {
      this.hashes = null;
      if (data == this.FromToken) {
        this.direction = (this.direction[1] +
          this.direction[0]) as DirectionType;
        this.FromToken = this.ToToken;
        this.ToToken = data;
      } else {
        switch (data) {
          case "Ethereum":
            this.direction = (this.direction[0] + "E") as DirectionType;
            this.ToToken = "Ethereum";
            break;
          case "BSC":
            this.direction = (this.direction[0] + "B") as DirectionType;
            this.ToToken = "BSC";
            break;
          case "DBX Smart Network":
            this.direction = (this.direction[0] + "X") as DirectionType;
            this.ToToken = "DBX Smart Network";
            break;
        }
      }
    },
    async loadControllerInfo() {
      this.loading_controllerInfo = true;
      try {
        this.controllerInfo = (
          await Axios.get("https://dbxbridge.uc.r.appspot.com/info")
        ).data;
        if (!this.controllerInfo)
          throw new Error("Received invalid data from controller");
      } catch (error) {
        console.error(error);
      }
      this.loading_controllerInfo = false;
    },
    async loadContractInfo() {
      this.loading_contractInfo = true;
      try {
        const w = this.wallet;
        const [Bb, Eb, Xb, BEa, BXa, EBa, EXa, Xa, Xd] = (
          await Promise.all([
            TKNB.balanceOf(w),
            TKNE.balanceOf(w),
            _providerX.getBalance(w),
            TKNB.allowance(w, address_BABE),
            TKNB.allowance(w, address_BABX),
            TKNE.allowance(w, address_BAEB),
            TKNE.allowance(w, address_BAEX),
            BAX.locked(w),
            BAX.directionE(w),
          ])
        ).map((r) => r.toString());
        this.approvedBE = BEa;
        this.approvedBX = BXa;
        this.approvedEB = EBa;
        this.approvedEX = EXa;
        this.approvedX = Xa;
        this.approvedX_dirE = Xd !== "false";
        this.balanceB = Bb;
        this.balanceE = Eb;
        this.balanceX = Xb;
      } catch (error) {
        console.error(error);
      }
      this.loading_contractInfo = false;
    },
    async handleClickRequest() {
      this.loading_swapping = true;
      this.hashes = null;
      this.hashes_url = {
        C: this.dirChainExplorer[0],
        D: this.dirChainExplorer[1],
      };
      this.hashes_names = {
        C: this.dirChainName[0],
        D: this.dirChainName[1],
      };
      try {
        this.warningMessage = "";
        if (
          !(this.approvedNonZero && this.approvedEqual) ||
          ((this.direction === "XE" || this.direction === "XB") &&
            this.approvedX_dirE !== (this.direction === "XE"))
        ) {
          await this.approve();
          this.inBetween = true;
        }
        this.inputAmount = "";
        await this.requestSwap();
      } catch (error: any) {
        this.warningMessage = error.message;
        console.error(error);
      }
      this.inBetween = false;
      this.loading_swapping = false;
      if (this.paused_chainIdHandler) {
        await this.clickConnectMetamask();
        this.paused_chainIdHandler = false;
      }
    },
    async approve() {
      this.loading_approve = true;
      if (this.direction === "XE" || this.direction === "XB") {
        const ptx = await BAX.populateTransaction.writeEntry(
          this.direction === "XE"
        );
        ptx.value = this.amountBN;
        console.log({
          amt: this.amountBN.toString(),
          bal: this.dirBalance[0],
        });
        const tx = await this.signer!.sendTransaction(ptx);
        console.log({ tx });
        await _wait();
      } else {
        const TKN = new Contract(
          {
            EB: address_TKNE,
            BE: address_TKNB,
            EX: address_TKNE,
            BX: address_TKNB,
          }[this.direction],
          Token.abi,
          this.signer!
        );
        console.log({
          amt: this.amountBN.toString(),
          bal: this.dirBalance[0],
        });
        const tx = await TKN.approve(
          {
            EB: address_BAEB,
            BE: address_BABE,
            EX: address_BAEX,
            BX: address_BABX,
          }[this.direction],
          this.amountBN
        );
        console.log({ tx });
        const receipt = await tx.wait();
        console.log({ receipt });
      }
      await this.loadContractInfo();
      this.loading_approve = false;
    },
    async requestSwap() {
      this.loading_request = true;
      try {
        this.hashes = (
          await Axios.get(
            `https://dbxbridge.uc.r.appspot.com/process?direction=${this.direction}&address=${this.wallet}`
          )
        ).data;
        console.log(this.hashes);
      } catch (error: any) {
        console.error({ ...error });
        throw new Error(error.response.data);
      }
      await this.loadContractInfo();
      this.loading_request = false;
    },
  },
});
</script>

<style lang="scss"></style>
