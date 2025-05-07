export interface WalletApproveFeatureEmits {
  (e: "update:modelValue", value: string | number): void;
  (e: "result", value: { isApproved: boolean }): void;
}
