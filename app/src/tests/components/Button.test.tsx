import Button from "@/components/Button";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

describe("Test Button Components", () => {
  const setup = ({
    label,
    onClick,
    dataTestId,
  }: {
    label: string;
    onClick?: () => void;
    dataTestId?: string;
  }) => {
    const user = userEvent.setup();
    const utils = render(
      <Button label={label} onClick={onClick} dataTestId={dataTestId} />
    );
    return { utils, user };
  };

  it("ボタンコンポーネントが存在", () => {
    const label = "Test Button";
    const dataTestId = "button1";
    setup({ label, dataTestId });
    const button = screen.getByTestId(dataTestId);
    expect(button).toBeInTheDocument();
  });

  it("ボタンクリックonClickでハンドラが動く", async () => {
    const label = "Test Button";
    const dataTestId = "button2";
    const onClick = vi.fn();
    setup({ label, onClick, dataTestId });

    const button = screen.getByTestId(dataTestId);
    expect(button).toBeInTheDocument();

    await waitFor(() => userEvent.click(screen.getByTestId(dataTestId)));
    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(1);
  });

   it.todo("Should render a normal string");
});
