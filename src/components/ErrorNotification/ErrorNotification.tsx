import { FC, useEffect } from 'react'
import { ErrorType } from '../../types.ts'
import { CloseButton, NotificationWrapper } from './ErrorNotification.styled.tsx'

interface NotificationProps {
  error: ErrorType
  onRemoveError: () => void
  setError: ( error: ErrorType ) => void
}

export const ErrorNotification: FC<NotificationProps> = ( {
  error,
  onRemoveError,
  setError,
} ) => {
  useEffect(
    () => {
      setTimeout( () => setError( ErrorType.NONE )
        , 3000 )
    }, [error],
  )

  return (
    <NotificationWrapper isVisible={Boolean( error )}>
      <CloseButton
        type="button"
        aria-label="Close the notification"
        onClick={onRemoveError}
      >
        &times;
      </CloseButton>
      {error}
    </NotificationWrapper>
  )
}
