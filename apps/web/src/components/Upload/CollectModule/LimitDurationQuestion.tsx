import CheckOutline from '@components/Common/Icons/CheckOutline'
import type {
  CollectModuleType,
  UploadedVideo
} from '@lenstube/lens/custom-types'
import { Trans } from '@lingui/macro'
import clsx from 'clsx'
import type { FC } from 'react'
import React from 'react'

type Props = {
  uploadedVideo: UploadedVideo
  setCollectType: (data: CollectModuleType) => void
}

const LimitDurationQuestion: FC<Props> = ({
  uploadedVideo,
  setCollectType
}) => {
  return (
    <div className="space-y-2">
      <h6>
        <Trans>Would you like to limit the collect duration?</Trans>
      </h6>
      <div className="flex flex-wrap gap-1.5 md:flex-nowrap">
        <button
          type="button"
          onClick={() =>
            setCollectType({
              timeLimitEnabled: false,
              isSimpleCollect: true
            })
          }
          className={clsx(
            'flex w-full items-center justify-between rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none dark:border-gray-700',
            {
              '!border-indigo-500':
                !uploadedVideo.collectModule.timeLimitEnabled
            }
          )}
        >
          <span>
            <Trans>Unlimited duration</Trans>
          </span>
          {!uploadedVideo.collectModule.timeLimitEnabled && (
            <CheckOutline className="h-3 w-3" />
          )}
        </button>
        <button
          type="button"
          onClick={() =>
            setCollectType({
              timeLimitEnabled: true,
              isSimpleCollect: true
            })
          }
          className={clsx(
            'flex w-full items-center justify-between rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none dark:border-gray-700',
            {
              '!border-indigo-500': uploadedVideo.collectModule.timeLimitEnabled
            }
          )}
        >
          <span>
            <Trans>Limit to 24 hours sale</Trans>
          </span>
          {uploadedVideo.collectModule.timeLimitEnabled && (
            <CheckOutline className="h-3 w-3" />
          )}
        </button>
      </div>
    </div>
  )
}

export default LimitDurationQuestion
