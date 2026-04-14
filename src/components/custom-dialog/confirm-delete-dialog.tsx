import { useTranslations } from 'next-intl';

import ConfirmDialog from './confirm-dialog';

export default function ConfirmDeleteDialog({
  name,
  action,
  isLoading,
  open,
  onClose,
}: {
  name: string;
  action: VoidFunction;
  isLoading: boolean;
  open: boolean;
  onClose: VoidFunction;
}) {
  const t = useTranslations();

  const renderAction = (
  "load"
  );

  return (
    <ConfirmDialog
      action={renderAction}
      title={t('Global.Sections.DeleteDialog.title', { item: name })}
      content={t('Global.Sections.DeleteDialog.content', { item: name })}
      open={open}
      onClose={onClose}
    />
  );
}
