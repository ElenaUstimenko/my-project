import type { Meta, StoryObj } from '@storybook/react';
import AppButton, {AppButtonVariant} from './AppButton';

const meta: Meta<typeof AppButton> = {
	component: AppButton,
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Text: Story = {
	args: {
		text: 'Text',
		variant: AppButtonVariant.TEXT
	},
};

export const TextDisabled: Story = {
	args: {
		text: 'Text',
		variant: AppButtonVariant.TEXT,
		isDisabled: true
	},
};

export const Outlined: Story = {
	args: {
		text: 'Outlined',
		variant: AppButtonVariant.OUTLINED
	},
};

export const Contained: Story = {
	args: {
		text: 'Contained',
		variant: AppButtonVariant.CONTAINED
	},
};