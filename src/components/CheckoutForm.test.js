import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText(/First Name:/i);
  userEvent.type(firstName, 'Jessica');

  const lastName = screen.getByLabelText(/Last name/i);
  userEvent.type(lastName, 'Ambrocio');

  const addressElement = screen.getByLabelText(/address/i);
  userEvent.type(addressElement, '123 Asd');

  const cityElement = screen.getByLabelText(/city/i);
  userEvent.type(cityElement, 'Waukegan');

  const stateElement = screen.getByLabelText(/state/i);
  userEvent.type(stateElement, 'Illinois');

  const zipInput = screen.getByLabelText(/zip/i);
  userEvent.type(zipInput, '60085');

  const submitButton = screen.getByRole('button');
  userEvent.click(submitButton);

  waitFor(() => {
    const successMessage = screen.getAllByTextId('successMessage');
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toBeVisible();
  });

});
